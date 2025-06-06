import BigNumber from "bignumber.js";
import { Address } from "../core/address";

export const MaxUint64AsBigNumber = new BigNumber("18446744073709551615");
export const DcdtContractAddress = new Address("drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqzlllsd5j0s2");
export const BaseUserAgent = "dharitri-sdk";
export const UnknownClientName = "unknown";

export const DEFAULT_ACCOUNT_AWAITING_POLLING_TIMEOUT_IN_MILLISECONDS = 6000;
export const DEFAULT_ACCOUNT_AWAITING_TIMEOUT_IN_MILLISECONDS =
    15 * DEFAULT_ACCOUNT_AWAITING_POLLING_TIMEOUT_IN_MILLISECONDS;
export const DEFAULT_ACCOUNT_AWAITING_PATIENCE_IN_MILLISECONDS = 0;
