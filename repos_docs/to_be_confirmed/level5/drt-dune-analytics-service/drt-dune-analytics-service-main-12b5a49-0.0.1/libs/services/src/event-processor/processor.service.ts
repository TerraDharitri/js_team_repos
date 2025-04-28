import { DynamicCollectionRepository } from "@libs/database/collections";
import { EventProcessor, EventProcessorOptions } from "./event.processor";
import { Locker } from "@terradharitri/sdk-nestjs-common";
import { Injectable } from "@nestjs/common";
import { Cron, CronExpression } from "@nestjs/schedule";
import { EventLog } from "apps/events-processor/src/processor/entities";
import { HatomBorrowEventsService, HatomEnterMarketEventsService } from "../events";


@Injectable()
export class ProcessorService {
  constructor(
    private readonly dynamicCollectionService: DynamicCollectionRepository,
    private readonly hatomEnterMarketService: HatomEnterMarketEventsService,
    private readonly hatomBorrowService: HatomBorrowEventsService,
  ) { }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleHatomEnterMarketEvents() {
    await Locker.lock('hatom-enter-market', async () => {
      const eventProcessorOptions = new EventProcessorOptions({
        elasticUrl: 'https://index.dharitri.org',
        eventIdentifiers: ['enterMarkets'],
        emitterAddresses: ['drt1qqqqqqqqqqqqqpgqxp28qpnv7rfcmk6qrgxgw5uf2fnp84ar78ssa3pe5a'],
        pageSize: 500,
        getLastProcessedTimestamp: async () => {
          return await this.dynamicCollectionService.getLastProcessedTimestamp('hatom-enter-market');
        },
        setLastProcessedTimestamp: async (nonce) => {
          await this.dynamicCollectionService.setLastProcessedTimestamp('hatom-enter-market', nonce);
        },
        onEventsReceived: async (highestTimestamp, events) => {
          highestTimestamp;
          await this.hatomEnterMarketService.hatomEnterMarketParser(events as EventLog[]);
        },
      });

      const eventProcessor = new EventProcessor();
      await eventProcessor.start(eventProcessorOptions);
    });
  }


  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleHatomBorrowEventsUSDT() {
    await Locker.lock('hatom-borrow-USDT-f8c08c', async () => {
      const eventProcessorOptions = new EventProcessorOptions({
        elasticUrl: 'https://index.dharitri.org',
        eventIdentifiers: ['borrow'],
        emitterAddresses: ['drt1qqqqqqqqqqqqqpgqkrgsvct7hfx7ru30mfzk3uy6pxzxn6jj78ss6f2uwz'],
        pageSize: 500,
        getLastProcessedTimestamp: async () => {
          return await this.dynamicCollectionService.getLastProcessedTimestamp('hatom-borrow-USDT-f8c08c');
        },
        setLastProcessedTimestamp: async (nonce) => {
          await this.dynamicCollectionService.setLastProcessedTimestamp('hatom-borrow-USDT-f8c08c', nonce);
        },
        onEventsReceived: async (highestTimestamp, events) => {
          highestTimestamp;
          await this.hatomBorrowService.hatomBorrowParser(events as EventLog[], 'USDT-f8c08c');
        },
      });
      const eventProcessor = new EventProcessor();
      await eventProcessor.start(eventProcessorOptions);
    });
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleHatomUsdcBorrowEventsUSDC() {
    await Locker.lock('hatom-borrow-USDC-c76f1f', async () => {
      const eventProcessorOptions = new EventProcessorOptions({
        elasticUrl: 'https://index.dharitri.org',
        eventIdentifiers: ['borrow'],
        emitterAddresses: ['drt1qqqqqqqqqqqqqpgqvxn0cl35r74tlw2a8d794v795jrzfxyf78ssk5sz3a'],
        pageSize: 500,
        getLastProcessedTimestamp: async () => {
          return await this.dynamicCollectionService.getLastProcessedTimestamp('hatom-borrow-USDC-c76f1f');
        },
        setLastProcessedTimestamp: async (nonce) => {
          await this.dynamicCollectionService.setLastProcessedTimestamp('hatom-borrow-USDC-c76f1f', nonce);
        },
        onEventsReceived: async (highestTimestamp, events) => {
          highestTimestamp;
          await this.hatomBorrowService.hatomBorrowParser(events as EventLog[], 'USDC-c76f1f');
        },
      });
      const eventProcessor = new EventProcessor();
      await eventProcessor.start(eventProcessorOptions);
    });
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleHatomBorrowEventsWREWA() {
    await Locker.lock('hatom-borrow-WREWA-bd4d79', async () => {
      const eventProcessorOptions = new EventProcessorOptions({
        elasticUrl: 'https://index.dharitri.org',
        eventIdentifiers: ['borrow'],
        emitterAddresses: ['drt1qqqqqqqqqqqqqpgq35qkf34a8svu4r2zmfzuztmeltqclapv78ssfwg6r0'],
        pageSize: 500,
        getLastProcessedTimestamp: async () => {
          return await this.dynamicCollectionService.getLastProcessedTimestamp('hatom-borrow-WREWA-bd4d79');
        },
        setLastProcessedTimestamp: async (nonce) => {
          await this.dynamicCollectionService.setLastProcessedTimestamp('hatom-borrow-WREWA-bd4d79', nonce);
        },
        onEventsReceived: async (highestTimestamp, events) => {
          highestTimestamp;
          await this.hatomBorrowService.hatomBorrowParser(events as EventLog[], 'WREWA-bd4d79');
        },
      });
      const eventProcessor = new EventProcessor();
      await eventProcessor.start(eventProcessorOptions);
    });
  }
}
