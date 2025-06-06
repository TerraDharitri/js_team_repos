import { forwardRef, Inject, Injectable } from "@nestjs/common";
import { ApiConfigService } from "src/common/api-config/api.config.service";
import { QueryPagination } from "src/common/entities/query.pagination";
import { GatewayComponentRequest } from "src/common/gateway/entities/gateway.component.request";
import { GatewayService } from "src/common/gateway/gateway.service";
import { ProtocolService } from "src/common/protocol/protocol.service";
import { TokenHelpers } from "src/utils/token.helpers";
import { DcdtDataSource } from "./entities/dcdt.data.source";
import { DcdtService } from "./dcdt.service";
import { GatewayNft } from "../nfts/entities/gateway.nft";
import { NftAccount } from "../nfts/entities/nft.account";
import { NftFilter } from "../nfts/entities/nft.filter";
import { NftType } from "../nfts/entities/nft.type";
import { NftExtendedAttributesService } from "../nfts/nft.extendedattributes.service";
import { NftCollectionWithRoles } from "../collections/entities/nft.collection.with.roles";
import { CollectionService } from "../collections/collection.service";
import { CollectionFilter } from "../collections/entities/collection.filter";
import { CollectionRoles } from "../tokens/entities/collection.roles";
import { AddressUtils, BinaryUtils, OriginLogger } from '@terradharitri/sdk-nestjs-common';
import { ApiUtils } from "@terradharitri/sdk-nestjs-http";
import { MetricsService } from "@terradharitri/sdk-nestjs-monitoring";
import { CacheService } from "@terradharitri/sdk-nestjs-cache";
import { IndexerService } from "src/common/indexer/indexer.service";
import { TrieOperationsTimeoutError } from "./exceptions/trie.operations.timeout.error";
import { CacheInfo } from "src/utils/cache.info";
import { AssetsService } from "src/common/assets/assets.service";
import { NftQueryOptions } from "../nfts/entities/nft.query.options";

@Injectable()
export class DcdtAddressService {
  private readonly logger = new OriginLogger(DcdtAddressService.name);
  private readonly NFT_THUMBNAIL_PREFIX: string;

  constructor(
    private readonly apiConfigService: ApiConfigService,
    private readonly dcdtService: DcdtService,
    private readonly indexerService: IndexerService,
    private readonly gatewayService: GatewayService,
    private readonly cachingService: CacheService,
    private readonly metricsService: MetricsService,
    private readonly protocolService: ProtocolService,
    private readonly nftExtendedAttributesService: NftExtendedAttributesService,
    @Inject(forwardRef(() => CollectionService))
    private readonly collectionService: CollectionService,
    private readonly assetsService: AssetsService
  ) {
    this.NFT_THUMBNAIL_PREFIX = this.apiConfigService.getExternalMediaUrl() + '/nfts/asset';
  }

  async getNftsForAddress(address: string, filter: NftFilter, pagination: QueryPagination, source?: DcdtDataSource, options?: NftQueryOptions): Promise<NftAccount[]> {
    if (filter.identifiers && filter.identifiers.length === 1) {
      return await this.getNftsForAddressFromGatewayWithElasticFallback(address, filter, pagination, options);
    }

    if (source === DcdtDataSource.elastic || AddressUtils.isSmartContractAddress(address)) {
      return await this.getNftsForAddressFromElastic(address, filter, pagination, options);
    }

    return await this.getNftsForAddressFromGatewayWithElasticFallback(address, filter, pagination, options);
  }

  async getNftCountForAddressFromElastic(address: string, filter: NftFilter): Promise<number> {
    return await this.indexerService.getNftCountForAddress(address, filter);
  }

  async getCollectionCountForAddressFromElastic(address: string, filter: CollectionFilter): Promise<number> {
    return await this.indexerService.getCollectionCountForAddress(address, filter);
  }

  private async getNftsForAddressFromElastic(address: string, filter: NftFilter, pagination: QueryPagination, options?: NftQueryOptions): Promise<NftAccount[]> {
    const dcdts = await this.indexerService.getNftsForAddress(address, filter, pagination) as any;
    const gatewayNfts: GatewayNft[] = [];

    for (const dcdt of dcdts) {
      const isToken = dcdt.tokenNonce === undefined;
      const nft = new GatewayNft();
      if (isToken) {
        nft.balance = dcdt.balance;
        nft.tokenIdentifier = dcdt.token;
      } else {
        nft.attributes = dcdt.data?.attributes;
        nft.balance = dcdt.balance;
        nft.creator = dcdt.data?.creator;
        nft.name = dcdt.data?.name;
        nft.nonce = dcdt.tokenNonce;
        nft.royalties = dcdt.data?.royalties;
        nft.tokenIdentifier = dcdt.identifier;
        nft.uris = dcdt.data?.uris;
        nft.timestamp = dcdt.timestamp;
      }

      gatewayNfts.push(nft);
    }

    const nfts: GatewayNft[] = Object.values(gatewayNfts).map(x => x as any).filter(x => x.tokenIdentifier.split('-').length === 3);

    const nftAccounts: NftAccount[] = await this.mapToNftAccount(nfts, address, pagination, options);

    return nftAccounts;
  }

  async getCollectionsForAddress(address: string, filter: CollectionFilter, pagination: QueryPagination): Promise<NftCollectionWithRoles[]> {
    const tokenCollections = await this.indexerService.getNftCollections(pagination, filter, address);
    const collectionsIdentifiers = tokenCollections.map((collection) => collection.token);

    const indexedCollections: Record<string, any> = {};
    for (const collection of tokenCollections) {
      indexedCollections[collection.token] = collection;
    }

    const accountCollections = await this.collectionService.applyPropertiesToCollections(collectionsIdentifiers);

    const collectionsWithRoles: NftCollectionWithRoles[] = [];

    for (const accountCollection of accountCollections) {
      const indexedCollection = indexedCollections[accountCollection.collection];
      if (indexedCollection) {
        accountCollection.timestamp = indexedCollection.timestamp;
        accountCollection.subType = indexedCollection.type;

        const collectionWithRoles = ApiUtils.mergeObjects(new NftCollectionWithRoles(), accountCollection);

        if (indexedCollection.roles) {
          if (!indexedCollection.roles['DCDTTransferRole']) {
            collectionWithRoles.canTransfer = true;
          }

          const addressRoles: CollectionRoles = new CollectionRoles();
          if (collectionWithRoles.canTransfer === false) {
            addressRoles.canTransfer = false;
          }

          for (const role of Object.keys(indexedCollection.roles)) {
            const addresses = indexedCollection.roles[role].distinct();
            if (addresses.includes(address)) {
              TokenHelpers.setCollectionRole(addressRoles, role);
            }
          }

          collectionWithRoles.role = addressRoles;

          // temporary, until we enforce deprecation for roles on the root element
          const clonedRoles = new CollectionRoles(collectionWithRoles.role);
          // @ts-ignore
          delete clonedRoles.roles;
          delete clonedRoles.canTransfer;

          Object.assign(collectionWithRoles, clonedRoles);
        }

        collectionsWithRoles.push(collectionWithRoles);
      }
    }

    for (const collection of collectionsWithRoles) {
      if (collection.type === NftType.NonFungibleDCDT) {
        //@ts-ignore
        delete collection.canAddQuantity;
      }

      if (collection.timestamp === 0) {
        // @ts-ignore
        delete accountCollection.timestamp;
      }
    }

    return collectionsWithRoles;
  }

  //@ts-ignore ( TBD )
  private async applyRolesToAccountCollections(address: string, collections: NftCollectionWithRoles[]): Promise<void> {
    const rolesResult = await this.gatewayService.getAddressDcdtRoles(address);
    const roles = rolesResult.roles;

    for (const collection of collections) {
      const role = roles[collection.collection];
      collection.role.canCreate = role ? role.includes('DCDTRoleNFTCreate') : false;
      collection.role.canBurn = role ? role.includes('DCDTRoleNFTBurn') : false;
      collection.role.canUpdateAttributes = role ? role.includes('DCDTRoleNFTUpdateAttributes') : false;
      collection.role.canAddUri = role ? role.includes('DCDTRoleNFTAddURI') : false;
      collection.role.canTransfer = role ? role.includes('DCDTTransferRole') : false;

      if (collection.type === NftType.SemiFungibleDCDT) {
        collection.role.canAddQuantity = role ? role.includes('DCDTRoleNFTAddQuantity') : false;
      }

      if (collection.timestamp === 0) {
        // @ts-ignore
        delete collection.timestamp;
      }
    }
  }

  private async getNftsForAddressFromGatewayWithElasticFallback(address: string, filter: NftFilter, pagination: QueryPagination, options?: NftQueryOptions): Promise<NftAccount[]> {
    const isTrieTimeout = await this.cachingService.get<boolean>(CacheInfo.AddressDcdtTrieTimeout(address).key);
    if (isTrieTimeout) {
      return await this.getNftsForAddressFromElastic(address, filter, pagination, options);
    }

    try {
      return await this.getNftsForAddressFromGateway(address, filter, pagination, options);
    } catch (error) {
      if (error instanceof TrieOperationsTimeoutError) {
        await this.cachingService.set(CacheInfo.AddressDcdtTrieTimeout(address).key, true, CacheInfo.AddressDcdtTrieTimeout(address).ttl);
        return await this.getNftsForAddressFromElastic(address, filter, pagination, options);
      }

      throw error;
    }
  }

  private async getNftsForAddressFromGateway(address: string, filter: NftFilter, pagination: QueryPagination, options?: NftQueryOptions): Promise<NftAccount[]> {
    let dcdts: Record<string, any> = {};

    if (filter.identifiers && filter.identifiers.length === 1) {
      const identifier = filter.identifiers[0];
      const collection = identifier.split('-').slice(0, 2).join('-');
      const nonceHex = identifier.split('-')[2];
      const nonceNumeric = BinaryUtils.hexToNumber(nonceHex);

      let result: any;
      try {
        result = await this.gatewayService.get(`address/${address}/nft/${collection}/nonce/${nonceNumeric}`, GatewayComponentRequest.addressNftByNonce);
      } catch (error: any) {
        if (error.response.error.includes('account was not found')) {
          return [];
        }

        throw error;
      }

      if (!result || !result.tokenData || result.tokenData.balance === '0') {
        return [];
      }

      result.tokenData.tokenIdentifier = identifier;

      dcdts[identifier] = result.tokenData;
    } else {
      dcdts = await this.getAllDcdtsForAddressFromGateway(address);
    }

    const nfts: GatewayNft[] = Object.values(dcdts).map(x => x as any).filter(x => x.tokenIdentifier.split('-').length === 3);

    const collator = new Intl.Collator('en', { sensitivity: 'base' });
    nfts.sort((a: GatewayNft, b: GatewayNft) => collator.compare(a.tokenIdentifier, b.tokenIdentifier));

    const nftAccounts: NftAccount[] = await this.mapToNftAccount(nfts, address, pagination, options);

    return this.filterDcdtsForAddressFromGateway(filter, pagination, nftAccounts);
  }

  private async mapToNftAccount(nfts: GatewayNft[], address?: string, pagination?: QueryPagination, options?: NftQueryOptions): Promise<NftAccount[]> {
    const nftAccounts: NftAccount[] = [];

    for (const dataSourceNft of nfts) {
      const nft = new NftAccount();
      nft.identifier = dataSourceNft.tokenIdentifier;
      nft.collection = dataSourceNft.tokenIdentifier.split('-').slice(0, 2).join('-');
      nft.nonce = dataSourceNft.nonce;
      nft.creator = dataSourceNft.creator;
      nft.royalties = Number(dataSourceNft.royalties) / 100; // 10.000 => 100%
      nft.uris = dataSourceNft.uris ? dataSourceNft.uris.filter((x: any) => x) : [];
      nft.name = dataSourceNft.name;
      nft.timestamp = dataSourceNft.timestamp;
      nft.hash = TokenHelpers.getNftProof(dataSourceNft.hash) ?? '';

      if (nft.uris && nft.uris.length > 0) {
        try {
          nft.url = TokenHelpers.computeNftUri(BinaryUtils.base64Decode(nft.uris[0]), this.NFT_THUMBNAIL_PREFIX);
        } catch (error) {
          this.logger.error(error);
        }
      }

      nft.isWhitelistedStorage = nft.url.startsWith(this.NFT_THUMBNAIL_PREFIX);

      nft.attributes = dataSourceNft.attributes;

      if (dataSourceNft.attributes) {
        nft.tags = this.nftExtendedAttributesService.getTags(dataSourceNft.attributes);
      }

      const collectionDetails = await this.dcdtService.getDcdtTokenProperties(nft.collection);
      if (collectionDetails) {
        // @ts-ignore
        nft.type = collectionDetails.type;

        // @ts-ignore
        nft.subType = collectionDetails.subType;

        if (nft.type === NftType.MetaDCDT) {
          const assets = await this.assetsService.getTokenAssets(nft.collection);
          if (assets && assets.name) {
            nft.name = assets.name;
          }

          nft.decimals = collectionDetails.decimals;

          // @ts-ignore
          delete nft.royalties;
          // @ts-ignore
          delete nft.uris;
        }

        if (!nft.name) {
          nft.name = collectionDetails.name;
        }
      }

      nft.balance = dataSourceNft.balance;
      nftAccounts.push(nft);
    }

    if (address && pagination) {
      await this.batchFetchReceivedAtTimestamps(nftAccounts, address, options);
    }

    return nftAccounts;
  }

  private async batchFetchReceivedAtTimestamps(nftAccounts: NftAccount[], address: string, options?: NftQueryOptions): Promise<void> {
    try {
      if (!options || !options.withReceivedAt || nftAccounts.length === 0) {
        return;
      }

      const identifiers = nftAccounts.map(nft => nft.identifier);

      const identifierToTimestamp = await this.indexerService.getAccountNftReceivedTimestamps(address, identifiers);

      for (const nft of nftAccounts) {
        if (identifierToTimestamp[nft.identifier]) {
          nft.receivedAt = identifierToTimestamp[nft.identifier];
        }
      }
    } catch (error) {
      this.logger.error('Error in batchFetchReceivedAtTimestamps', error);
    }
  }

  private async getAllDcdtsForAddressFromGatewayRaw(address: string): Promise<{ [key: string]: any }> {
    // eslint-disable-next-line require-await
    const dcdtResult = await this.gatewayService.get(`address/${address}/dcdt`, GatewayComponentRequest.addressDcdt, async (error) => {
      const errorMessage = error?.response?.data?.error;
      if (errorMessage) {
        if (errorMessage.includes('account was not found')) {
          return true;
        }

        if (errorMessage.includes('trie operations timeout')) {
          throw new TrieOperationsTimeoutError();
        }
      }

      return false;
    });

    if (!dcdtResult) {
      return {};
    }

    return dcdtResult.dcdts;
  }

  private pendingRequestsDictionary: { [key: string]: any } = {};

  async getAllDcdtsForAddressFromGateway(address: string): Promise<{ [key: string]: any }> {
    let pendingRequest = this.pendingRequestsDictionary[address];
    if (pendingRequest) {
      const result = await pendingRequest;
      this.metricsService.incrementPendingApiHit('Gateway.AccountDcdts');
      return result;
    }

    const cachedValue = await this.cachingService.getLocal<{ [key: string]: any }>(`address:${address}:dcdts`);

    if (cachedValue) {
      this.metricsService.incrementCachedApiHit('Gateway.AccountDcdts');
      return cachedValue;
    }

    pendingRequest = this.getAllDcdtsForAddressFromGatewayRaw(address);
    this.pendingRequestsDictionary[address] = pendingRequest;

    let dcdts: { [key: string]: any };
    try {
      dcdts = await pendingRequest;
    } finally {
      delete this.pendingRequestsDictionary[address];
    }

    const ttl = await this.protocolService.getSecondsRemainingUntilNextRound();

    this.cachingService.setLocal(`address:${address}:dcdts`, dcdts, ttl);

    return dcdts;
  }

  private filterDcdtsForAddressFromGateway(filter: NftFilter, pagination: QueryPagination, nfts: NftAccount[]): NftAccount[] {
    if (filter.search) {
      const searchLower = filter.search.toLowerCase();

      nfts = nfts.filter(x => x.name.toLowerCase().includes(searchLower) || x.identifier.toLowerCase().includes(searchLower));
    }

    if (filter.identifiers) {
      nfts = nfts.filter(x => filter.identifiers?.includes(x.identifier));
    }

    if (filter.type) {
      const nftTypes = filter.type ?? [];

      nfts = nfts.filter(x => nftTypes.includes(x.type));
    }

    if (filter.subType) {
      const nftSubTypes = filter.subType ?? [];

      nfts = nfts.filter(x => nftSubTypes.includes(x.subType));
    }

    if (filter.collection) {
      nfts = nfts.filter(x => x.collection === filter.collection);
    }

    if (filter.name) {
      const searchedNameLower = filter.name.toLowerCase();

      nfts = nfts.filter(x => x.name.toLowerCase().includes(searchedNameLower));
    }

    if (filter.collections) {
      const collectionsArray = filter.collections;
      nfts = nfts.filter(x => collectionsArray.includes(x.collection));
    }

    if (filter.tags) {
      const tagsArray = filter.tags;
      nfts = nfts.filter(nft => tagsArray.filter(tag => nft.tags.includes(tag)).length === tagsArray.length);
    }

    if (filter.creator) {
      nfts = nfts.filter(x => x.creator === filter.creator);
    }

    if (filter.hasUris === true) {
      nfts = nfts.filter(x => x.uris && x.uris.length > 0);
    } else if (filter.hasUris === false) {
      nfts = nfts.filter(x => x.uris && x.uris.length === 0);
    }

    if (filter.includeFlagged !== true) {
      nfts = nfts.filter(x => !x.scamInfo);
    }

    if (filter.excludeMetaDCDT === true) {
      nfts = nfts.filter(x => x.type.in(NftType.NonFungibleDCDT, NftType.SemiFungibleDCDT));
    }

    const { from, size } = pagination;

    nfts = nfts.slice(from, from + size);

    return nfts;
  }
}
