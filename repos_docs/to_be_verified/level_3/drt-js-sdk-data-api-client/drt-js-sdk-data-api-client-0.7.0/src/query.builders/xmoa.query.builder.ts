import { DataApiBaseQueryBuilder, DataApiFirstLastOrAggregateQueryBuilder } from './internal';

export class DataApiXMOAQueryBuilder extends DataApiBaseQueryBuilder {
  constructor() {
    super();
    this.addToPath({ name: 'xmoa', args: [] });
  }

  public unlockEarlyCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'unlockEarly', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public unlockEarlyTotalAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'unlockEarly', args: [] });
    this.addToPath({ name: 'totalAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public unlockEarlyUnlockableAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'unlockEarly', args: [] });
    this.addToPath({ name: 'unlockableAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public unlockEarlyToBeBurnedAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'unlockEarly', args: [] });
    this.addToPath({ name: 'toBeBurnedAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public unlockAssetsCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'unlockAssets', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public unlockAssetsTotalAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'unlockAssets', args: [] });
    this.addToPath({ name: 'totalAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public unlockAssetsTotalUnlockedAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({name: 'unlockAssets', args: []});
    this.addToPath({name: 'totalUnlockedAmount', args: [], hasQuery: true});
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public reduceLockPeriodCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'reduceLockPeriod', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public reduceLockPeriodTotalAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'reduceLockPeriod', args: [] });
    this.addToPath({ name: 'totalAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public reduceLockPeriodBurnedAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'reduceLockPeriod', args: [] });
    this.addToPath({ name: 'burnedAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public reduceLockPeriodReducedAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'reduceLockPeriod', args: [] });
    this.addToPath({ name: 'reducedAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public lockTokensCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'lockTokens', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public lockTokensTotalAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'lockTokens', args: [] });
    this.addToPath({ name: 'totalAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public lockTokensExtendedAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'lockTokens', args: [] });
    this.addToPath({ name: 'extendedAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public migrateOldTokensCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'migrateOldTokens', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public migrateOldTokensTotalAmount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'migrateOldTokens', args: [] });
    this.addToPath({ name: 'totalAmount', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
  
  public lkmoaCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'LKMOA', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
  
  public lkmoaTotalSupply(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'LKMOA', args: [] });
    this.addToPath({ name: 'totalSupply', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }

  public xmoaCount(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'XMOA', args: [] });
    this.addToPath({ name: 'count', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
  
  public xmoaTotalSupply(): DataApiFirstLastOrAggregateQueryBuilder {
    this.addToPath({ name: 'XMOA', args: [] });
    this.addToPath({ name: 'totalSupply', args: [], hasQuery: true });
    return new DataApiFirstLastOrAggregateQueryBuilder(this);
  }
}
