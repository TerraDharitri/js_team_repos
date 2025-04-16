import type { Code } from "@terradharitri/sdk-core"

export type DeployOrUpgradeParamsType = {
    address?: string;
    code: Code;
    args: any[];
    gasLimit: number;
    upgradeable?: boolean,
    readable?: boolean,
    payable?: boolean,
    payableBySc?: boolean
}