export class GasInfo {
  public value: number = 0;

  static UnwrapRewa: GasInfo = {
    value: 5_000_000,
  };

  static CollectFeesBase: GasInfo = {
    value: 5_000_000,
  };

  static CollectFeesExtra: GasInfo = {
    value: 1_000_000,
  };

  static Refund: GasInfo = {
    value: 15_000_000,
  };

  static GatewayDefault: GasInfo = {
    value: 50_000_000,
  };
}
