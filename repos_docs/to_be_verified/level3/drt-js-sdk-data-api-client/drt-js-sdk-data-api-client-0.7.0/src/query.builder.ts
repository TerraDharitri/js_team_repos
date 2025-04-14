import { DataApiBaseQuery } from './queries';
import {
  DataApiAccountsQueryBuilder,
  DataApiContractsQueryBuilder,
  DataApiDCDTsQueryBuilder,
  DataApiNetworkQueryBuilder,
  DataApiNFTsQueryBuilder,
  DataApiPortfolioQueryBuilder,
  DataApiQuotesQueryBuilder,
  DataApiScResultsQueryBuilder,
  DataApiStakingQueryBuilder,
  DataApiTokensQueryBuilder,
  DataApiTradingQueryBuilder,
  DataApiTransactionsQueryBuilder,
  DataApiTransfersQueryBuilder,
  DataApiDharitriXAnalyticsQueryBuilder,
  DataApiXMOAQueryBuilder,
} from './query.builders';


export class DataApiQueryBuilder extends DataApiBaseQuery {
  static createAccountsQuery(): DataApiAccountsQueryBuilder {
    return new DataApiAccountsQueryBuilder();
  }

  static createContractsQuery(): DataApiContractsQueryBuilder {
    return new DataApiContractsQueryBuilder();
  }

  static createDCDTsQuery(): DataApiDCDTsQueryBuilder {
    return new DataApiDCDTsQueryBuilder();
  }

  static createNetworkQuery(): DataApiNetworkQueryBuilder {
    return new DataApiNetworkQueryBuilder();
  }

  static createNFTsQuery(): DataApiNFTsQueryBuilder {
    return new DataApiNFTsQueryBuilder();
  }

  static createPortfolioQuery(): DataApiPortfolioQueryBuilder {
    return new DataApiPortfolioQueryBuilder();
  }

  static createQuotesQuery(): DataApiQuotesQueryBuilder {
    return new DataApiQuotesQueryBuilder();
  }

  static createScResultsQuery(): DataApiScResultsQueryBuilder {
    return new DataApiScResultsQueryBuilder();
  }

  static createStakingQuery(): DataApiStakingQueryBuilder {
    return new DataApiStakingQueryBuilder();
  }

  static createTokensQuery(): DataApiTokensQueryBuilder {
    return new DataApiTokensQueryBuilder();
  }

  static createTradingQuery(): DataApiTradingQueryBuilder {
    return new DataApiTradingQueryBuilder();
  }

  static createTransactionsQuery(): DataApiTransactionsQueryBuilder {
    return new DataApiTransactionsQueryBuilder();
  }

  static createTransfersQuery(): DataApiTransfersQueryBuilder {
    return new DataApiTransfersQueryBuilder();
  }

  static createDharitriXAnalyticsQuery(): DataApiDharitriXAnalyticsQueryBuilder {
    return new DataApiDharitriXAnalyticsQueryBuilder();
  }

  static createXMOAQuery(): DataApiXMOAQueryBuilder {
    return new DataApiXMOAQueryBuilder();
  }
}
