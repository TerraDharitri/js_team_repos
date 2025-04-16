import { DcdtType } from '../entities';
import { DataApiBaseQueryBuilder, DataApiFirstLastOrAggregateQueryBuilder } from './internal';

export class DataApiDCDTsQueryBuilder extends DataApiBaseQueryBuilder {
  constructor() {
    super();
    this.addToPath({ name: 'dcdts', args: [] });
  }

  public count(dcdtType: DcdtType): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({
      name: 'count',
      args: [
        { name: 'type', type: 'DcdtType!', value: dcdtType },
      ],
      hasQuery: true,
    });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public count24h(dcdtType: DcdtType): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({
      name: 'count24h',
      args: [
        { name: 'type', type: 'DcdtType!', value: dcdtType },
      ],
      hasQuery: true,
    });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
}
