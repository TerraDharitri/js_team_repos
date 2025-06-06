import { INestApplication } from '@nestjs/common';
import { AccountStatsEntity } from 'src/db/account-stats/account-stats';
import { AccountsStatsService } from 'src/modules/account-stats/accounts-stats.service';
import * as request from 'supertest';
import { getApplication } from './get-application';
describe('AccountStatsResolver', () => {
  let app: INestApplication;

  beforeAll(async () => {
    app = await getApplication();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('Query #accountStats', () => {
    const mutation = () => `
      { accountStats(filters: { address: "drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r" }) {
        address
        auctions
        biddingBalance
        claimable
        collected
        collections
        creations
        orders
      }
    }
    `;

    it('get stats for account', async () => {
      const accountStatsService =
        app.get<AccountsStatsService>(AccountsStatsService);
      jest.spyOn(accountStatsService, 'getStats').mockResolvedValue(
        new AccountStatsEntity({
          auctions: '2',
          orders: '0',
          biddingBalance: '0',
          address:
            'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
        }),
      );
      jest.spyOn(accountStatsService, 'getClaimableCount').mockResolvedValue(5);
      jest.spyOn(accountStatsService, 'getCollectedCount').mockResolvedValue(5);
      jest
        .spyOn(accountStatsService, 'getCollectionsCount')
        .mockResolvedValue(5);
      jest.spyOn(accountStatsService, 'getCreationsCount').mockResolvedValue(5);

      return request(app.getHttpServer())
        .post('/graphql')
        .send({
          query: mutation(),
        })
        .expect((res) => {
          expect(res.body).toEqual({
            data: {
              accountStats: {
                address:
                  'drt1dc3yzxxeq69wvf583gw0h67td226gu2ahpk3k50qdgzzym8npltqr06t5r',
                auctions: '2',
                biddingBalance: '0',
                claimable: '5',
                collected: '5',
                collections: '5',
                creations: '5',
                orders: '0',
              },
            },
          });
        });
    });
  });
});
