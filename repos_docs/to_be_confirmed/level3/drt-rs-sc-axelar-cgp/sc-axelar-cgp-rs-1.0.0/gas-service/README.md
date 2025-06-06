# DharitrI Gas Service Smart Contract

The gas service contract is responsible for handling cross-chain gas payments.
Before a cross-chain call is made (before the Gateway contract **callContract** endpoint is called), the cross-chain gas should
be paid using one of the endpoints of this contract.

The endpoints in this contract emit events which will later be caught by Relayers, which will forward the call cross-chain only if the necessary gas amount was paid.

It is based on the reference [CGP Axelar Gas Service implementation in Solidity](https://github.com/axelarnetwork/axelar-cgp-solidity/blob/main/contracts/gas-service/AxelarGasService.sol)

## Important endpoints

The most used endpoints are:
- **payGasForContractCall** (sender, destination_chain, destination_address, payload, refund_address) - accepts DCDT payment
- **payNativeGasForContractCall** (sender, destination_chain, destination_address, payload, refund_address) - accepts REWA payment

These endpoints look like this:
```rust
#[payable("*")]
#[endpoint(payGasForContractCall)]
fn pay_gas_for_contract_call(
    &self,
    sender: ManagedAddress,
    destination_chain: ManagedBuffer,
    destination_address: ManagedBuffer,
    payload: ManagedBuffer,
    refund_address: ManagedAddress,
);
```

It will emit a **gas_paid_for_contract_call_event**:
```rust
#[event("gas_paid_for_contract_call_event")]
fn gas_paid_for_contract_call_event(
    &self,
    #[indexed] sender: ManagedAddress,
    #[indexed] destination_chain: ManagedBuffer,
    #[indexed] destination_contract_address: ManagedBuffer,
    data: GasPaidForContractCallData<Self::Api>,
);
```

Where **GasPaidForContractCallData** is a struct with the following fields:
```rust
#[derive(TypeAbi, TopEncode)]
pub struct GasPaidForContractCallData<M: ManagedTypeApi> {
    pub hash: ManagedByteArray<M, KECCAK256_RESULT_LEN>,
    pub gas_token: TokenIdentifier<M>,
    pub gas_fee_amount: BigUint<M>,
    pub refund_address: ManagedAddress<M>,
}
```

The endpoint for paying gas with native token (REWA) is similar:
```rust
#[payable("REWA")]
#[endpoint(payNativeGasForContractCall)]
fn pay_native_gas_for_contract_call(
    &self,
    sender: ManagedAddress,
    destination_chain: ManagedBuffer,
    destination_address: ManagedBuffer,
    payload: ManagedBuffer,
    refund_address: ManagedAddress,
);
```

It will emit a **native_gas_paid_for_contract_call_event**:
```rust
#[event("native_gas_paid_for_contract_call_event")]
fn native_gas_paid_for_contract_call_event(
    &self,
    #[indexed] sender: ManagedAddress,
    #[indexed] destination_chain: ManagedBuffer,
    #[indexed] destination_contract_address: ManagedBuffer,
    data: NativeGasPaidForContractCallData<Self::Api>,
);
```

Where **NativeGasPaidForContractCallData** is a struct with the following fields:
```rust
#[derive(TypeAbi, TopEncode)]
pub struct NativeGasPaidForContractCallData<M: ManagedTypeApi> {
    pub hash: ManagedByteArray<M, KECCAK256_RESULT_LEN>,
    pub value: BigUint<M>,
    pub refund_address: ManagedAddress<M>,
}
```
