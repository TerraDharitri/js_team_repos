import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Overlay } from 'components';
import { faQuestionCircle } from 'icons/regular';

enum ErrorDescriptionEnum {
  nonPayableContract = 'sending value to non payable contract',
  protectedKey = 'not allowed to write under protected key'
}

const getErrorDescription = ({ message }: { message: string }) => {
  switch (true) {
    case message === ErrorDescriptionEnum.nonPayableContract:
      return 'Token transfers to a non-payable contract without calling an endpoint that accepts the tokens, will be rejected. You either tried to transfer some tokens to a non-payable smart contract without calling an endpoint or the endpoint you attempted to call along with the transfer has been ignored due to malformed call data contents. Possible reasons for malformed endpoint call data would be: uneven hex value padding, stray spaces/newlines, invalid values (e.g. -1, non-hex strings, etc)';
    case message === ErrorDescriptionEnum.protectedKey:
      return 'The SC you are calling tries to create keys in the account state which are prefixed with protected keywords, like numbat or dharitri.';
    default:
      return '';
  }
};

export const TransactionErrorDescription = ({
  message
}: {
  message: string;
}) => {
  const description = getErrorDescription({ message });

  if (!description) {
    return null;
  }

  return (
    <div className='ms-1'>
      <Overlay
        title={description}
        className='d-flex'
        tooltipClassName='vm-error-display'
      >
        <FontAwesomeIcon
          icon={faQuestionCircle}
          className='small text-neutral-400 ms-1'
        />
      </Overlay>
    </div>
  );
};
