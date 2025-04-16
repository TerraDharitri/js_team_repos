import { CollectionsStatsService } from '../collections-stats.service';
import { Test } from '@nestjs/testing';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import * as Transport from 'winston-transport';
import { DrtApiService } from 'src/common';
import { CollectionStatsRepository } from 'src/db/collection-stats/collection-stats.repository';
import { CollectionStatsRepositoryMock } from 'src/db/collection-stats/collection-stats.repository-mock';
import { CollectionStatsEntity } from 'src/db/collection-stats/collection-stats';
import { DrtApiServiceMock } from 'src/common/services/drt-communication/drt-api.service.mock';

describe.skip('CollectionsStatsService', () => {
  let service: CollectionsStatsService;
  const DrtApiServiceProvider = {
    provide: DrtApiService,
    useClass: DrtApiServiceMock,
  };

  const CollectionStatsRepositoryProvider = {
    provide: CollectionStatsRepository,
    useClass: CollectionStatsRepositoryMock,
  };

  const logTransports: Transport[] = [
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.timestamp(),
        nestWinstonModuleUtilities.format.nestLike(),
      ),
    }),
  ];
  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        DrtApiServiceProvider,
        CollectionStatsRepositoryProvider,
        CollectionsStatsService,
      ],
      imports: [
        WinstonModule.forRoot({
          transports: logTransports,
        }),
      ],
    }).compile();

    service = moduleRef.get<CollectionsStatsService>(CollectionsStatsService);
  });

  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getItemsCount', () => {
    it('should return total nfts count', async () => {
      const results = await service.getItemsCount('');

      expect(results).toStrictEqual(4);
    });
  });

  describe('getStats', () => {
    it('should return the collection stats', async () => {
      const expected = new CollectionStatsEntity({
        activeAuctions: 2,
        auctionsEnded: 4,
        maxPrice: '1111111111111',
        minPrice: '1000000000000',
        saleAverage: '11111111100',
        volumeTraded: '211111111110',
      });
      const results = await service.getStats('test');
      expect(results).toMatchObject(expected);
    });
  });
});
