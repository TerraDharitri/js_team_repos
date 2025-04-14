
import { ContractQueryResponse } from "@terradharitri/sdk-network-providers";
import { INetworkProvider } from "@terradharitri/sdk-network-providers/out/interface";
import { ResultsParser, SmartContract, Interaction, TypedOutcomeBundle } from "@terradharitri/sdk-core";
import { OriginLogger } from "../utils/origin.logger";

export class ContractQueryRunner {
  private readonly logger = new OriginLogger(ContractQueryRunner.name);
  private readonly proxy: INetworkProvider;
  private readonly parser: ResultsParser = new ResultsParser();

  constructor(proxy: INetworkProvider) {
    this.proxy = proxy;
  }

  async runQuery(contract: SmartContract, interaction: Interaction): Promise<TypedOutcomeBundle> {
    try {
      const queryResponse: ContractQueryResponse = await this.proxy.queryContract(interaction.buildQuery());

      return this.parser.parseQueryResponse(queryResponse, interaction.getEndpoint());
    } catch (error) {
      this.logger.log(`Unexpected error when running query '${interaction.buildQuery().func}' to sc '${contract.getAddress().bech32()}' `);
      this.logger.error(error);

      throw error;
    }
  }
}
