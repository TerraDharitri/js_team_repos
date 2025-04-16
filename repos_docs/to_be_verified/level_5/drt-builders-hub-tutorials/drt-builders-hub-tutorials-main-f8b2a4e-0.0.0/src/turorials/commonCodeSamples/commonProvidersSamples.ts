export const challengeTokenSample = `
import { NativeAuthClient } from "@terradharitri/sdk-native-auth-client";

const client = new NativeAuthClient({
    apiUrl: "https://devnet-api.dharitri.org",
    expirySeconds: 7200,
  });

const challengeToken = await client.initialize();
`;

export const nativeAuthTokenSample = `
import { NativeAuthClient } from "@terradharitri/sdk-native-auth-client";

const client = new NativeAuthClient();
const nativeAuthToekn = client.getToken(
  address,
  challengeToken,
  challengeTokenSignature
);
`;
