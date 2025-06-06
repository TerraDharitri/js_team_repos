import { getTokenInfo } from "./getTokenInfo";
import { parseAmount } from "@terradharitri/sdk-dapp/utils/operations/parseAmount";

export const parseByTokenId = async (tokenId: string, amount: string) => {
  const tokenData = await getTokenInfo(tokenId);
  return parseAmount(amount, tokenData.decimals);
};
