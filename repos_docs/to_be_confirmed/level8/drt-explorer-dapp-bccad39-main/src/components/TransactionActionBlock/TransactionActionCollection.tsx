import { NetworkLink } from 'components';
import { urlBuilder } from 'helpers';
import { TransactionTokenArgumentType, NftTypeEnum } from 'types';

export const TransactionActionCollection = ({
  token
}: {
  token: TransactionTokenArgumentType;
}) => (
  <div className='collection-action-block d-contents'>
    {token && token.collection && (
      <NetworkLink
        to={
          token?.type === NftTypeEnum.MetaDCDT
            ? urlBuilder.tokenMetaDcdtDetails(token.collection)
            : urlBuilder.collectionDetails(token.collection)
        }
        className={`d-flex text-truncate ${token.svgUrl ? 'side-link' : ''}`}
      >
        <div className='d-flex align-items-center symbol text-truncate'>
          {token.svgUrl && (
            <img
              src={token.svgUrl}
              className='side-icon me-1'
              alt=''
              role='presentation'
            />
          )}
          <span className='text-truncate'>{token.ticker}</span>
        </div>
      </NetworkLink>
    )}
  </div>
);
