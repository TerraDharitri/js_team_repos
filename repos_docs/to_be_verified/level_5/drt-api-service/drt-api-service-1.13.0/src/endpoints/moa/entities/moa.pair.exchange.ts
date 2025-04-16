import { registerEnumType } from "@nestjs/graphql";

export enum MexPairExchange {
  dharitrix = 'dharitrix',
  unknown = 'unknown'
}

registerEnumType(MexPairExchange, {
  name: 'MexPairExchange',
  description: 'MexPairExchange object type.',
  valuesMap: {
    dharitrix: {
      description: 'dharitrix',
    },
    unknown: {
      description: 'unknown',
    },
  },
});
