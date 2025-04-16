import { Injectable } from "@nestjs/common";
import { EventLog } from "apps/events-processor/src/processor/entities";
import { Address } from "@terradharitri/sdk-core";
import BigNumber from "bignumber.js";
import { CsvRecordsService } from "../records";
import moment from "moment";
import { DataService } from "../data";
import { TableSchema } from "apps/dune-simulator/src/endpoints/dune-simulator/entities";
import { joinCsvAttributes } from "libs/services/utils";

interface BorrowEvent {
  eventName: string;
  borrowerAddress: string;
  amount: BigNumber;
  newAccountBorrow: BigNumber;
  newTotalBorrows: BigNumber;
  newBorrowerIndex: BigNumber;
}

@Injectable()
export class HatomBorrowEventsService {
  private readonly headers: TableSchema[] = [
    { name: 'borrower_address', type: 'varchar' },
    { name: 'timestamp', type: 'varchar' },
    { name: 'borrowed_amount', type: 'double' },
    { name: 'borrowed_amount_in_rewa', type: 'double' },
    { name: 'borrowed_amount_in_usd', type: 'double' },
    { name: 'total_borrowed', type: 'double' },
    { name: 'account_borrowed', type: 'double' },
    { name: 'borrowed_token', type: 'varchar' },
  ];
  constructor(
    private readonly csvRecordsService: CsvRecordsService,
    private readonly dataService: DataService,
  ) { }

  public async hatomBorrowParser(eventsLog: EventLog[], borrowedToken: string): Promise<void> {

    for (const eventLog of eventsLog) {
      const borrowEventInHex = '626f72726f775f6576656e74'; // 'borrow_event'
      const borrowEventTopicsLength = 6;

      if (eventLog.identifier === "borrow" && eventLog.topics.length === borrowEventTopicsLength && eventLog.topics[0] === borrowEventInHex) {
        const currentEvent = this.decodeTopics(eventLog);

        const eventDate = moment.unix(eventLog.timestamp);

        const [borrowedAmountInREWA, borrowedAmountInUSD] = await this.convertBorrowedAmount(currentEvent, borrowedToken, eventDate);
        const tokenPrecision = await this.dataService.getTokenPrecision(borrowedToken);

        await this.csvRecordsService.pushRecord(
          `hatom_borrow_events`,
          [
            joinCsvAttributes(
              currentEvent.borrowerAddress,
              eventDate.format('YYYY-MM-DD HH:mm:ss.SSS'),
              currentEvent.amount.shiftedBy(-tokenPrecision).decimalPlaces(4),
              borrowedAmountInREWA.shiftedBy(-tokenPrecision).decimalPlaces(4),
              borrowedAmountInUSD.shiftedBy(-tokenPrecision).decimalPlaces(4),
              currentEvent.newTotalBorrows.shiftedBy(-tokenPrecision).decimalPlaces(4),
              currentEvent.newAccountBorrow.shiftedBy(-tokenPrecision).decimalPlaces(4),
              borrowedToken,
            ),
          ],
          this.headers
        );
      }
    }
  }

  decodeTopics(eventLog: EventLog): BorrowEvent {
    const currentEvent: BorrowEvent = {
      eventName: Buffer.from(eventLog.topics[0], 'hex').toString(),
      borrowerAddress: Address.newFromHex(Buffer.from(eventLog.topics[1], 'hex').toString('hex')).toBech32(),
      amount: BigNumber(Buffer.from(eventLog.topics[2], 'hex').toString('hex'), 16),
      newAccountBorrow: BigNumber(Buffer.from(eventLog.topics[3], 'hex').toString('hex'), 16),
      newTotalBorrows: BigNumber(Buffer.from(eventLog.topics[4], 'hex').toString('hex'), 16),
      newBorrowerIndex: BigNumber(Buffer.from(eventLog.topics[5], 'hex').toString('hex'), 16),
    };

    return currentEvent;
  }

  async convertBorrowedAmount(currentEvent: BorrowEvent, borrowedToken: string, date: moment.Moment): Promise<[BigNumber, BigNumber]> {
    let borrowedAmountInREWA, borrowedAmountInUSD;

    const rewaPrice = await this.dataService.getTokenPrice('WREWA-bd4d79', date);
    if (borrowedToken === 'WREWA-bd4d79') {
      borrowedAmountInREWA = currentEvent.amount;
      borrowedAmountInUSD = borrowedAmountInREWA.multipliedBy(rewaPrice);
    } else {
      borrowedAmountInUSD = currentEvent.amount;
      borrowedAmountInREWA = borrowedAmountInUSD.dividedBy(rewaPrice);
    }
    return [borrowedAmountInREWA, borrowedAmountInUSD];
  }
}


