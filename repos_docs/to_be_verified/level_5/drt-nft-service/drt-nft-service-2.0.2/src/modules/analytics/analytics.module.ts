import { forwardRef, Module } from '@nestjs/common';
import { DrtCommunicationModule } from 'src/common';
import { MarketplacesService } from '../marketplaces/marketplaces.service';
import { MarketplacesCachingService } from '../marketplaces/marketplaces-caching.service';
import { AuctionsModuleGraph } from '../auctions/auctions.module';
import { CommonModule } from 'src/common.module';
import { AnalyticsService } from './analytics.service';
import { BuyEventParser } from './buy-event.parser';
import { ElasticAnalyticsService } from './elastic.indexer.service';
import { AcceptOfferEventParser } from './acceptOffer-event.parser';

@Module({
  providers: [
    MarketplacesService,
    MarketplacesCachingService,
    AnalyticsService,
    ElasticAnalyticsService,
    BuyEventParser,
    AcceptOfferEventParser,
  ],
  imports: [
    DrtCommunicationModule,
    CommonModule,
    forwardRef(() => AuctionsModuleGraph),
  ],
  exports: [AnalyticsService, ElasticAnalyticsService],
})
export class AnalyticsModule {}
