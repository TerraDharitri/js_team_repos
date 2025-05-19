import { Operation, OptionalOperation } from "./operation";

// WalletConnect Namespace for DharitrI
export const WALLETCONNECT_DHARITRI_NAMESPACE = "drt";
// WalletConnect default methods for DHARITRI
export const WALLETCONNECT_DHARITRI_METHODS = Object.values(Operation);
// WalletConnect optional methods for DHARITRI
export const WALLETCONNECT_DHARITRI_OPTIONAL_METHODS =
  Object.values(OptionalOperation);
