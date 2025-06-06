import { Injectable, Logger } from '@nestjs/common';
import { ApiConfigService, CacheInfo } from '@drt-monorepo/common';
import { NotifierBlockEvent, NotifierEvent } from './types';
import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { EVENTS_NOTIFIER_QUEUE } from '../../../../config/configuration';
import { RedisHelper } from '@drt-monorepo/common/helpers/redis.helper';
import { BinaryUtils } from '@terradharitri/sdk-nestjs-common';
import { EventIdentifiers, Events } from '@drt-monorepo/common/utils/event.enum';
import { SlackApi } from '@drt-monorepo/common/api/slack.api';

@Injectable()
export class EventProcessorService {
  private readonly contractGateway: string;
  private readonly contractGasService: string;
  private readonly contractIts: string;
  private readonly logger: Logger;

  constructor(
    private readonly redisHelper: RedisHelper,
    private readonly slackApi: SlackApi,
    apiConfigService: ApiConfigService,
  ) {
    this.contractGateway = apiConfigService.getContractGateway();
    this.contractGasService = apiConfigService.getContractGasService();
    this.contractIts = apiConfigService.getContractIts();
    this.logger = new Logger(EventProcessorService.name);
  }

  @RabbitSubscribe({
    queue: EVENTS_NOTIFIER_QUEUE,
    createQueueIfNotExists: false,
  })
  async consumeEvents(blockEvent: NotifierBlockEvent) {
    try {
      const crossChainTransactions = new Set<string>();

      for (const event of blockEvent.events) {
        const shouldHandle = this.handleEvent(event);

        if (shouldHandle) {
          crossChainTransactions.add(event.txHash);
        }
      }

      if (crossChainTransactions.size > 0) {
        await this.redisHelper.sadd(CacheInfo.CrossChainTransactions().key, ...crossChainTransactions);
      }
    } catch (e) {
      this.logger.error(
        `An unhandled error occurred when consuming events from block with hash ${blockEvent.hash}: ${JSON.stringify(
          blockEvent.events,
        )}`,
        e,
      );
      await this.slackApi.sendError(
        'Event processing error',
        `An unhandled error occurred when consuming events from block with hash ${blockEvent.hash}`,
      );

      throw e;
    }
  }

  private handleEvent(event: NotifierEvent): boolean {
    if (event.address === this.contractGasService) {
      const eventName = BinaryUtils.base64Decode(event.topics[0]);

      const validEvent =
        eventName === Events.GAS_PAID_FOR_CONTRACT_CALL_EVENT ||
        eventName === Events.NATIVE_GAS_PAID_FOR_CONTRACT_CALL_EVENT ||
        eventName === Events.GAS_ADDED_EVENT ||
        eventName === Events.NATIVE_GAS_ADDED_EVENT ||
        eventName === Events.REFUNDED_EVENT;

      if (validEvent) {
        this.logger.debug('Received Gas Service event from :');
        this.logger.debug(JSON.stringify(event));
      }

      return validEvent;
    }

    if (event.address === this.contractGateway) {
      const eventName = BinaryUtils.base64Decode(event.topics[0]);

      const validEvent =
        (event.identifier === EventIdentifiers.CALL_CONTRACT && eventName === Events.CONTRACT_CALL_EVENT) ||
        (event.identifier === EventIdentifiers.ROTATE_SIGNERS && eventName === Events.SIGNERS_ROTATED_EVENT) ||
        (event.identifier === EventIdentifiers.APPROVE_MESSAGES && eventName === Events.MESSAGE_APPROVED_EVENT) ||
        (event.identifier === EventIdentifiers.VALIDATE_MESSAGE && eventName === Events.MESSAGE_EXECUTED_EVENT);

      if (validEvent) {
        this.logger.debug('Received Gateway event from :');
        this.logger.debug(JSON.stringify(event));
      }

      return validEvent;
    }

    if (event.address === this.contractIts) {
      const eventName = BinaryUtils.base64Decode(event.topics[0]);

      const validEvent =
        eventName === Events.INTERCHAIN_TOKEN_DEPLOYMENT_STARTED_EVENT ||
        eventName === Events.INTERCHAIN_TRANSFER_EVENT;

      if (validEvent) {
        this.logger.debug('Received ITS event from :');
        this.logger.debug(JSON.stringify(event));
      }

      return validEvent;
    }

    return false;
  }
}
