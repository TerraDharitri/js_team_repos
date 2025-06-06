import { MetricsService } from "@terradharitri/sdk-nestjs-monitoring";
import { Test } from "@nestjs/testing";
import { ApiConfigService } from "src/common/api-config/api.config.service";
import { GatewayService } from "src/common/gateway/gateway.service";
import { ApiMetricsService } from "src/common/metrics/api.metrics.service";
import { ProtocolService } from "src/common/protocol/protocol.service";

describe('ApiMetricService', () => {
  let service: ApiMetricsService;
  let gatewayService: GatewayService;
  beforeEach(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        ApiMetricsService,
        {
          provide: ApiConfigService,
          useValue: {
            getIsTransactionProcessorCronActive: jest.fn(),
          },
        },
        {
          provide: GatewayService,
          useValue: {
            getNetworkStatus: jest.fn(),
          },
        },
        {
          provide: ProtocolService,
          useValue: {
            getShardIds: jest.fn(),
          },
        },
        {
          provide: MetricsService,
          useValue: {
            vmQueriesHistogram: jest.fn(),
            gatewayDurationHistogram: jest.fn(),
            persistenceDurationHistogram: jest.fn(),
            indexerDurationHistogram: jest.fn(),
            graphqlDurationHistogram: jest.fn(),
            currentNonceGauge: jest.fn(),
            lastProcessedNonceGauge: jest.fn(),
          },
        },
      ],
    }).compile();

    service = moduleRef.get<ApiMetricsService>(ApiMetricsService);
    gatewayService = moduleRef.get<GatewayService>(GatewayService);
  });

  it('service should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getCurrentNonce', () => {
    it('should return current nonce for a given shard id', async () => {
      jest.spyOn(gatewayService, 'getNetworkStatus').mockResolvedValue({
        drt_cross_check_block_height: 'meta 16974200',
        drt_current_round: 16995012,
        drt_epoch_number: 1180,
        drt_highest_final_nonce: 16989264,
        drt_nonce: 16989268,
        drt_nonce_at_epoch_start: 16987444,
        drt_nonces_passed_in_current_epoch: 1824,
        drt_round_at_epoch_start: 16993184,
        drt_rounds_passed_in_current_epoch: 1828,
        drt_rounds_per_epoch: 14400,
      });
      const result = await service.getCurrentNonce(1);

      expect(gatewayService.getNetworkStatus).toHaveBeenCalledWith(1);
      expect(result).toStrictEqual(16989268);
    });
  });
});
