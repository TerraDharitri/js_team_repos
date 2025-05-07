import { AbiRegistry, SmartContract, Address } from '@terradharitri/sdk-core/out';
import { contractAddress } from '@/config';
import json from '@/abi/ping-pong.abi.json';

const abi = AbiRegistry.create(json);

export const smartContract = new SmartContract({
  address: new Address(contractAddress),
  abi
});
