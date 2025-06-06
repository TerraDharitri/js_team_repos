# Native Authenticator for JavaScript

Native Authenticator server-side component for JavaScript and TypeScript (written in TypeScript).

## Distribution

[npm](https://www.npmjs.com/package/@terradharitri/sdk-native-auth-server)

## Example

```js
const server = new NativeAuthServer();

// decodes the accessToken in its components: ttl, origin, address, signature, blockHash & body
const decoded = await server.decode(accessToken);

// decodes and validates the accessToken.
// Performs validation of the block hash, verifies its validity, as well as origin verification
const result = await server.validate(accessToken);
```

### Config

```js
{
  // The endpoint from where the current block information will be fetched upon validation.
  // The default value points to the mainnet API, but can be overridden to be network-specific
  // or to point to a self-hosted location
  apiUrl: string = 'https://api.dharitri.org';

  // The endpoint where the impersonation information should be fetched
  // The endpoint will be appended with the following <IMPERSONATE_URL>/SIGNER_ADDRESS/IMPERSONATE_ADDRESS
  // The endpoint should return 200 if it's allowed or 403 Forbidden if it's not allowed
  validateImpersonateUrl: string = 'https://extras-api.dharitri.org/impersonate/allowed';

  // An optional function that returns a boolean if the impersonation is accepted
  // This is called if the extraInfo payload contains the `multisig` or `impersonate` attribute.
  validateImpersonateCallback: (signerAddress: string, impersonateAddress: string) => boolean | Promise<boolean>;

  // A mandatory list of accepted origins in case the server component must validate the incoming requests
  // by domain. At least one value must be provided. Wildcards are accepted in the form '*.domain.com' or 'https://*.domain.com'.
  // General wildcard is also accepted, in the form '*'
  acceptedOrigins: string[] = [];

  // An optional function that returns a boolean if the origin received as a parameter is accepted.
  // This is called only if the origin is not in the list of accepted origins defined in acceptedOrigins
  isOriginAccepted?: (origin: string) => boolean | Promise<boolean>;

  // Maximum allowed TTL from the token.
  // Default: one day (86400 seconds)
  maxExpirySeconds: number = 86400;

  // An optional implementation of the caching interface used for resolving
  // latest block timestamp and also to validate and provide a block timestamp given a certain block hash.
  // It can be integrated with popular caching mechanisms such as redis
  cache?: NativeAuthCacheInterface;
}
```
