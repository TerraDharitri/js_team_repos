import { useGetAccount } from '@terradharitri/sdk-dapp/dist/hooks';
import { useGetNetworkConfig } from '@terradharitri/sdk-dapp/dist/hooks/useGetNetworkConfig';
import { ProxyNetworkProvider } from '@terradharitri/sdk-network-providers';
import {
  Address,
  AddressValue,
  ContractFunction,
  ResultsParser
} from '@terradharitri/sdk-core/out';
import { smartContract } from './smartContract';

const resultsParser = new ResultsParser();

export const useGetTimeToPong = () => {
  const { network } = useGetNetworkConfig();

  const { address } = useGetAccount();

  const getTimeToPong = async () => {
    try {
      const query = smartContract.createQuery({
        func: new ContractFunction('getTimeToPong'),
        args: [new AddressValue(new Address(address))]
      });
      const provider = new ProxyNetworkProvider(network.apiAddress);

      const queryResponse = await provider.queryContract(query);

      const endpointDefinition = smartContract.getEndpoint('getTimeToPong');

      const { firstValue } = resultsParser.parseQueryResponse(
        queryResponse,
        endpointDefinition
      );

      const secondsRemaining: number = firstValue?.valueOf()?.toNumber();

      return secondsRemaining;
    } catch (err) {
      console.error('Unable to call getTimeToPong', err);
    }
  };

  return getTimeToPong;
};
