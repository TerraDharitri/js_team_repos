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
  moneyMarket: string;
  borrowerAddress: string;
  amount: BigNumber;
}

@Injectable()
export class HatomEnterMarketEventsService {
  private readonly headers: TableSchema[] = [
    { name: 'timestamp', type: 'varchar' },
    { name: 'money_market', type: 'varchar' },
    { name: 'token_amount', type: 'double' },
    { name: 'token_id', type: 'varchar' },
    { name: 'borrower_address', type: 'varchar' },
    { name: 'value_in_rewa', type: 'double' },
    { name: 'value_in_usd', type: 'double' },
    { name: 'total_value_in_rewa', type: 'double' },
    { name: 'total_value_in_usd', type: 'double' },
  ];
  private readonly moneyMarketNotFound = "Money Market Not Found!";
  private totalValueInUsd: BigNumber = new BigNumber(0);
  private totalValueInRewa: BigNumber = new BigNumber(0);

  constructor(
    private readonly csvRecordsService: CsvRecordsService,
    private readonly dataService: DataService,
  ) { }

  public async hatomEnterMarketParser(eventsLog: EventLog[]): Promise<void> {

    for (const eventLog of eventsLog) {
      const enterMarketEventInHex = '656e7465725f6d61726b65745f6576656e74'; // 'enter_market_event'
      const enterMarketTopicsLength = 4;
      if (eventLog.identifier === "enterMarkets" && eventLog.topics.length === enterMarketTopicsLength && eventLog.topics[0] === enterMarketEventInHex) {
        const currentEvent = this.decodeTopics(eventLog);

        const eventDate = moment.unix(eventLog.timestamp);
        const tokenID = this.getTokenIdByMoneyMarket(currentEvent.moneyMarket);
        if (tokenID === this.moneyMarketNotFound) {
          continue;
        }

        const [valueInRewa, valueInUsd] = await this.convertTokenValue(currentEvent, tokenID, eventDate);
        const tokenPrecision = await this.dataService.getTokenPrecision(tokenID);

        await this.csvRecordsService.pushRecord(
          `hatom_enter_market_events`,
          [
            joinCsvAttributes(
              eventDate.format('YYYY-MM-DD HH:mm:ss.SSS'),
              currentEvent.moneyMarket,
              currentEvent.amount.shiftedBy(-tokenPrecision).decimalPlaces(4),
              tokenID,
              currentEvent.borrowerAddress,
              valueInRewa.shiftedBy(-tokenPrecision).decimalPlaces(4),
              valueInUsd.shiftedBy(-tokenPrecision).decimalPlaces(4),
              this.totalValueInRewa.shiftedBy(-tokenPrecision).decimalPlaces(4),
              this.totalValueInUsd.shiftedBy(-tokenPrecision).decimalPlaces(4),
            ),
          ],
          this.headers,
        );
      }
    }
  }

  decodeTopics(eventLog: EventLog): BorrowEvent {
    const currentEvent: BorrowEvent = {
      eventName: Buffer.from(eventLog.topics[0], 'hex').toString(),
      moneyMarket: Address.newFromHex(Buffer.from(eventLog.topics[1], 'hex').toString('hex')).toBech32(),
      borrowerAddress: Address.newFromHex(Buffer.from(eventLog.topics[2], 'hex').toString('hex')).toBech32(),
      amount: BigNumber(Buffer.from(eventLog.topics[3], 'hex').toString('hex'), 16),
    };

    return currentEvent;
  }

  async convertTokenValue(currentEvent: BorrowEvent, tokenID: string, date: moment.Moment): Promise<[BigNumber, BigNumber]> {
    const rewaPrice = await this.dataService.getTokenPrice('WREWA-bd4d79', date);
    const tokenPrice = await this.dataService.getTokenPrice(tokenID, date, 'hatom');

    const valueInUsd = currentEvent.amount.multipliedBy(tokenPrice);
    const valueInRewa = valueInUsd.dividedBy(rewaPrice);

    this.totalValueInUsd = this.totalValueInUsd.plus(valueInUsd);
    this.totalValueInRewa = this.totalValueInRewa.plus(valueInRewa);

    return [valueInRewa, valueInUsd];
  }

  getTokenIdByMoneyMarket(moneyMarket: string) {
    switch (moneyMarket) {
      case 'drt1qqqqqqqqqqqqqpgqta0tv8d5pjzmwzshrtw62n4nww9kxtl278ssda3z9z':
        return 'HUTK-4fa4b2';
      case 'drt1qqqqqqqqqqqqqpgqkrgsvct7hfx7ru30mfzk3uy6pxzxn6jj78ss6f2uwz':
        return 'HUSDC-d80042';
      case 'drt1qqqqqqqqqqqqqpgqvxn0cl35r74tlw2a8d794v795jrzfxyf78ssk5sz3a':
        return 'HUSDT-6f0914';
      case 'drt1qqqqqqqqqqqqqpgqxmn4jlazsjp6gnec95423egatwcdfcjm78ssfurhvg':
        return 'HSREWA-c13a4e';
      case 'drt1qqqqqqqqqqqqqpgq35qkf34a8svu4r2zmfzuztmeltqclapv78ssfwg6r0':
        return 'HREWA-d61095';
      case 'drt1qqqqqqqqqqqqqpgqz9pvuz22qvqxfqpk6r3rluj0u2can55c78ss4yhnv3':
        return 'HWTAO-2e9136';
      case 'drt1qqqqqqqqqqqqqpgqxerzmkr80xc0qwa8vvm5ug9h8e2y7jgsqk2s39m363':
        return 'HHTM-e03ba5';
      case 'drt1qqqqqqqqqqqqqpgq8h8upp38fe9p4ny9ecvsett0usu2ep7978ssealcqw':
        return 'HWETH-b3d17e';
      case 'drt1qqqqqqqqqqqqqpgqg47t8v5nwzvdxgf6g5jkxleuplu8y4f678ss5ylht6':
        return 'HWBTC-49ca31';
      case 'drt1qqqqqqqqqqqqqpgqdvrqup8k9mxvhvnc7cnzkcs028u95s5378ss7e6afl':
        return 'HBUSD-ac1fca';
      case 'drt1qqqqqqqqqqqqqpgq7sspywe6e2ehy7dn5dz00ved3aa450mv78sszrvusy':
        return 'HSWTAO-6df80c';
      default:
        return this.moneyMarketNotFound;
    }
  }
}



