import { Account, Address } from "@terradharitri/sdk-core/out";
import { ApiNetworkProvider } from "@terradharitri/sdk-network-providers/out";

export const getAccountFromNetwork = async ({
  address,
  networkURL,
}: {
  address: string;
  networkURL: string;
}) => {
  const networkProvider = new ApiNetworkProvider(networkURL);

  const addressObj = Address.fromBech32(address);

  const accountOnNetwork = await networkProvider.getAccount(addressObj);
  const account = new Account(addressObj);
  account.update({
    nonce: accountOnNetwork.nonce,
    balance: accountOnNetwork.balance,
  });

  return account;
};
