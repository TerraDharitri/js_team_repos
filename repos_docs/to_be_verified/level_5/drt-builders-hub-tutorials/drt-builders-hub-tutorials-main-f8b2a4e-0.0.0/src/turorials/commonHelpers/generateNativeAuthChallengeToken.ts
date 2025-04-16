import { NativeAuthClient } from "@terradharitri/sdk-native-auth-client";

export const generateNativeAuthChallengeToken = async () => {
  const client = new NativeAuthClient({
    apiUrl: "https://devnet-api.dharitri.org",
    expirySeconds: 7200,
  });
  return await client.initialize();
};
