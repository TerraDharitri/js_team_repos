import { DataApiBaseQueryBuilder, DataApiFirstLastOrAggregateQueryBuilder } from './internal';

export class DataApiDharitriXAnalyticsQueryBuilder extends DataApiBaseQueryBuilder {
  constructor() {
    super();
    this.addToPath({ name: 'DharitriXAnalytics', args: [] });
  }

  public metric(series: string, key: string): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({
      name: 'metric',
      args: [
        { name: 'series', type: 'String!', value: series },
        { name: 'key', type: 'String!', value: key },
      ],
      hasQuery: true,
    });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
}
