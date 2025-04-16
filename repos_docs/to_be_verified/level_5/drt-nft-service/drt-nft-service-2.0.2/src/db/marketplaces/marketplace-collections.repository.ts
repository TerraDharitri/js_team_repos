import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MarketplaceCollectionEntity } from './marketplace-collection.entity';
import { MarketplaceEntity } from './marketplace.entity';

@Injectable()
export class MarketplaceCollectionsRepository {
  constructor(
    @InjectRepository(MarketplaceCollectionEntity)
    private marketplaceCollectionRepository: Repository<MarketplaceCollectionEntity>,
  ) {}
  async getMarketplaceByAddressAndCollection(
    collection: string,
    address: string,
  ): Promise<MarketplaceEntity[]> {
    return await this.marketplaceCollectionRepository
      .createQueryBuilder('mc')
      .select('mc.collectionIdentifier as collectionIdentifier')
      .addSelect('m.name as name')
      .addSelect('m.url as url')
      .addSelect('m.address as address')
      .addSelect('m.key as `key`')
      .addSelect('m.type as `type`')
      .addSelect('m.acceptedPaymentTokens as acceptedPaymentTokens')
      .innerJoin('marketplaces', 'm', 'm.id=mc.marketplaceId')
      .where(
        `mc.collectionIdentifier = '${collection}' and m.address= '${address}'`,
      )
      .execute();
  }
  async getAllCollections(): Promise<MarketplaceCollectionEntity[]> {
    return await this.marketplaceCollectionRepository.find();
  }

  async getMarketplaceByCollection(
    collection: string,
  ): Promise<MarketplaceEntity[]> {
    return await this.marketplaceCollectionRepository
      .createQueryBuilder('mc')
      .select('mc.collectionIdentifier as collectionIdentifier')
      .addSelect('m.name as name')
      .addSelect('m.url as url')
      .addSelect('m.address as address')
      .addSelect('m.key as `key`')
      .addSelect('m.type as `type`')
      .addSelect('m.acceptedPaymentTokens as acceptedPaymentTokens')
      .innerJoin('marketplaces', 'm', 'm.id=mc.marketplaceId')
      .where(`mc.collectionIdentifier = '${collection}'`)
      .execute();
  }

  async getMarketplaceByCollections(
    collectionIdentifiers: string[],
  ): Promise<any[]> {
    return await this.marketplaceCollectionRepository
      .createQueryBuilder('mc')
      .select('mc.collectionIdentifier as collectionIdentifier')
      .addSelect('m.name as name')
      .addSelect('m.url as url')
      .addSelect('m.address as address')
      .addSelect('m.key as `key`')
      .addSelect('m.type as `type`')
      .addSelect('m.acceptedPaymentTokens as acceptedPaymentTokens')
      .innerJoin('marketplaces', 'm', 'm.id=mc.marketplaceId')
      .where('mc.collectionIdentifier IN(:...collectionIdentifiers)', {
        collectionIdentifiers: collectionIdentifiers,
      })
      .execute();
  }

  async getCollectionsByMarketplace(
    marketplaceKey: string,
  ): Promise<MarketplaceCollectionEntity[]> {
    return await this.marketplaceCollectionRepository
      .createQueryBuilder('mc')
      .select('mc.collectionIdentifier as collectionIdentifier')
      .innerJoin('marketplaces', 'm', 'm.id=mc.marketplaceId')
      .where(`m.key = :marketplaceKey`, {
        marketplaceKey: marketplaceKey,
      })
      .execute();
  }
}
