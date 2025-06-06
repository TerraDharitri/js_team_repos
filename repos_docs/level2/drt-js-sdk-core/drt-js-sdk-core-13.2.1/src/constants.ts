export const TRANSACTION_MIN_GAS_PRICE = 1000000000;
export const TRANSACTION_OPTIONS_DEFAULT = 0;
export const TRANSACTION_OPTIONS_TX_HASH_SIGN = 0b0001;
export const TRANSACTION_OPTIONS_TX_GUARDED = 0b0010;
export const TRANSACTION_VERSION_DEFAULT = 2;
export const MIN_TRANSACTION_VERSION_THAT_SUPPORTS_OPTIONS = 2;
export const DCDT_TRANSFER_GAS_LIMIT = 500000;
export const DCDT_TRANSFER_FUNCTION_NAME = "DCDTTransfer";
export const DCDTNFT_TRANSFER_FUNCTION_NAME = "DCDTNFTTransfer";
export const MULTI_DCDTNFT_TRANSFER_FUNCTION_NAME = "MultiDCDTNFTTransfer";
export const DCDT_TRANSFER_VALUE = "0";
export const ARGUMENTS_SEPARATOR = "@";
export const VM_TYPE_WASM_VM = new Uint8Array([0x05, 0x00]);
export const CONTRACT_DEPLOY_ADDRESS_HEX = "0000000000000000000000000000000000000000000000000000000000000000";
export const DELEGATION_MANAGER_SC_ADDRESS_HEX = "233300000000000000000000000000000002333000000000000000000004ffff";
export const DCDT_CONTRACT_ADDRESS_HEX = "233300000000000000000000000000000002333000000000000000000002ffff";

export const DEFAULT_MESSAGE_VERSION = 1;
export const MESSAGE_PREFIX = "\x17Numbat Signed Message:\n";
export const HEX_TRANSACTION_HASH_LENGTH = 64;

export const CURRENT_NUMBER_OF_SHARDS_WITHOUT_META = 3;
export const WasmVirtualMachine = "0500";
export const METACHAIN_ID = 4294967295;
export const SDK_JS_SIGNER = "sdk-js";
export const UNKNOWN_SIGNER = "unknown";

/**
 * @deprecated
 */
export const DEFAULT_HRP = "drt";

/**
 * @deprecated
 */
export const BECH32_ADDRESS_LENGTH = 62;

/**
 * @deprecated Use {@link CONTRACT_DEPLOY_ADDRESS_HEX} instead.
 */
export const CONTRACT_DEPLOY_ADDRESS = "drt1qqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq85hk5z";

/**
 * @deprecated Use {@link DELEGATION_MANAGER_SC_ADDRESS_HEX} instead.
 */
export const DELEGATION_MANAGER_SC_ADDRESS = "drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqyllls4jxmwv";

/**
 * @deprecated Use {@link 233300000000000000000000000000000002333000000000000000000002ffff} instead.
 */
export const DCDT_CONTRACT_ADDRESS = "drt1yvesqqqqqqqqqqqqqqqqqqqqqqqqyvesqqqqqqqqqqqqqqqzlllsd5j0s2";
