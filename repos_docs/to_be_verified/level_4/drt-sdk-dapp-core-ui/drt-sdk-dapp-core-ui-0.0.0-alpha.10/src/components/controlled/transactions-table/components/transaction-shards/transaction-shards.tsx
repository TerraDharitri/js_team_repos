import { Component, h, Prop } from '@stencil/core';
import classNames from 'classnames';
import { DataTestIdsEnum } from 'constants/dataTestIds.enum';

import type { ITransactionsTableRow } from '../../transactions-table.type';

@Component({
  tag: 'drt-transaction-shards',
  styleUrl: 'transaction-shards.css',
})
export class TransactionShards {
  @Prop() class?: string;
  @Prop() transaction: ITransactionsTableRow;

  render() {
    return (
      <div class={classNames(this.class, 'transaction-shards')}>
        <drt-explorer-link link={this.transaction.sender.shardLink} class="transactions-table-body-cell-link" data-testid={DataTestIdsEnum.shardFromLink}>
          <span slot="content" data-testid={DataTestIdsEnum.senderShard}>
            {this.transaction.sender.shard}
          </span>
        </drt-explorer-link>

        <span class="transaction-shards-arrow">&#10132;</span>

        <drt-explorer-link class="transactions-table-body-cell-link" link={this.transaction.receiver.shardLink} data-testid={DataTestIdsEnum.shardToLink}>
          <span slot="content" data-testid={DataTestIdsEnum.receiverShard}>
            {this.transaction.receiver.shard}
          </span>
        </drt-explorer-link>
      </div>
    );
  }
}
