import {useGetAccountInfo, useGetNetworkConfig} from "@terradharitri/sdk-dapp/dist/hooks";
import {FormatAmount, Trim} from "@terradharitri/sdk-dapp/dist/UI";
import {CopyButton} from "@terradharitri/sdk-dapp/dist/UI/CopyButton";

export const BalanceSection = () => {
    const { network } = useGetNetworkConfig();
    const {account}  = useGetAccountInfo();

    return (
        <div className="text-lg mt-32 mb-16">
            <div className="text-left">
                <span className="drt-8 text-neutral-500">Balance:</span>
                <FormatAmount value={account.balance} rewaLabel={network.rewaLabel} />
            </div>
            <div className="flex items-center justify-center text-left text-neutral-500">
                <span className="drt-8">Address:</span>
                <div className="flex justify-center items-center">
                    <Trim className="flex items-center justify-center text-neutral-900" text={account.address}/>
                    <CopyButton className="flex items-center drt-4 text-xs" text={account.address} />
                </div>
            </div>
        </div>
    )
}