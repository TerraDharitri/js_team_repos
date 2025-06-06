import React from 'react';
import { render } from '@testing-library/react';
import { TransactionValue } from '../TransactionValue';
import { getMockTransactionByIndex } from './getMockTransactionByIndex';

describe('TransactionsValue tests', () => {
  const transactions: { [key: string]: string } = {
    0: '14.16 REWA',
    9: '1.00 REWA',
    // legacy delegation
    19: '20.00 REWA', // unStake
    22: '20.00 REWA', // unBond
    // stake transactions
    1: '5.00 REWA', // unDelegate
    20: '0.06 REWA', // claimRewards
    21: '0.39 REWA' // reDelegateRewards
  };

  for (let i = 0; i < Object.keys(transactions).length; i++) {
    const input = parseInt(Object.keys(transactions)[i]);
    const transaction = getMockTransactionByIndex(input);
    const output = transactions[input];
    it(`extracts ${output}`, () => {
      const methods = render(<TransactionValue transaction={transaction} />);

      const transactionValue = methods.getByTestId('transactionValue');

      expect(transactionValue.textContent).toBe(output);
    });
  }
  it('extracts NFT', () => {
    const transaction = getMockTransactionByIndex(4);

    const methods = render(<TransactionValue transaction={transaction} />);

    const nftBadge = methods.getByTestId('nftBadge');
    const nftFormattedAmount = methods.queryByTestId('nftFormattedAmount');
    const nftExplorerLink = methods.getByTestId('nftExplorerLink');

    expect(nftBadge.textContent).toBe('NFT');
    expect(nftExplorerLink.textContent).toBe('ARTCRAFT-322c6e-11');
    expect(nftExplorerLink.getAttribute('href')).toBe(
      'http://devnet-explorer.dharitri.org/nfts/ARTCRAFT-322c6e-11'
    );
    expect(nftFormattedAmount).toBe(null);
  });
  it('extracts MetaDCDT', () => {
    const transaction = getMockTransactionByIndex(6);

    const methods = render(<TransactionValue transaction={transaction} />);

    const nftBadge = methods.queryByTestId('nftBadge');
    const nftFormattedAmount = methods.getByTestId('nftFormattedAmount');
    const transactionValueIcon = methods.getByTestId('transactionValueIcon');
    const nftExplorerLink = methods.getByTestId('nftExplorerLink');

    expect(nftBadge).toBe(null);
    expect(nftFormattedAmount.textContent).toBe('0.09');
    expect(nftExplorerLink.textContent).toBe('LKMOA');
    expect(nftExplorerLink.getAttribute('href')).toBe(
      'http://devnet-explorer.dharitri.org/nfts/LKMOA-aab910-03'
    );
    expect(transactionValueIcon).toBeDefined();
    expect(transactionValueIcon.innerHTML).toContain(
      '0.09 LKMOA (LKMOA-aab910-03)\n316.867286073585 LKMOA (LKMOA-aab910-0d3d)'
    );
  });
  it('extracts DCDT', () => {
    const transaction = getMockTransactionByIndex(8);

    const methods = render(<TransactionValue transaction={transaction} />);

    const tokenFormattedAmount = methods.getByTestId('tokenFormattedAmount');
    const transactionValueIcon = methods.getByTestId('transactionValueIcon');
    const tokenExplorerLink = methods.getByTestId('tokenExplorerLink');

    expect(tokenFormattedAmount.textContent).toBe('1.00');
    expect(tokenExplorerLink.textContent).toBe('WREWA');
    expect(tokenExplorerLink.getAttribute('href')).toBe(
      'http://devnet-explorer.dharitri.org/tokens/WREWA-bd4d79'
    );
    expect(transactionValueIcon).toBeDefined();
    expect(transactionValueIcon.innerHTML).toContain(
      '1 WREWA (WREWA-bd4d79)\n281,066.754391919467235791 MOA (MOA-455c57)'
    );
  });
});
