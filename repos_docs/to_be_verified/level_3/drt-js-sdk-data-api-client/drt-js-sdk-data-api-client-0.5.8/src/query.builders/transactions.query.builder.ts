import { DataApiBaseQueryBuilder, DataApiFirstLastOrAggregateQueryBuilder } from './internal';

export class DataApiTransactionsQueryBuilder extends DataApiBaseQueryBuilder {
  constructor() {
    super();
    this.addToPath({ name: 'transactions', args: [] });
  }

  public count(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public count24h(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'count_24h', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public dailyFeesCaptured(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'dailyFeesCaptured', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
}
