import { afterEach, assert, beforeEach, describe, test } from 'vitest';
import { assertAccount, e, FSWorld, LSWallet, LSWorld } from 'xsuite';
import {
  ADDRESS_ZERO,
  CHAIN_NAME,
  INTERCHAIN_TOKEN_ID,
  OTHER_CHAIN_ADDRESS,
  OTHER_CHAIN_NAME,
  OTHER_CHAIN_TOKEN_ADDRESS,
  TOKEN_ID,
  TOKEN_ID2,
  TOKEN_MANAGER_ADDRESS,
  TOKEN_MANAGER_ADDRESS_2,
  TOKEN_SALT,
  TOKEN_SALT2,
} from '../helpers';
import {
  baseItsKvs,
  computeInterchainTokenIdRaw,
  deployContracts,
  deployTokenManagerInterchainToken,
  deployTokenManagerLockUnlock,
  gasService,
  its,
  TOKEN_MANAGER_TYPE_INTERCHAIN_TOKEN,
  TOKEN_MANAGER_TYPE_LOCK_UNLOCK,
  TOKEN_MANAGER_TYPE_MINT_BURN,
  tokenManager,
} from '../itsHelpers';
import { AbiCoder } from 'ethers';

let world: LSWorld;
let deployer: LSWallet;
let collector: LSWallet;
let user: LSWallet;
let otherUser: LSWallet;

beforeEach(async () => {
  world = await LSWorld.start();
  await world.setCurrentBlockInfo({
    nonce: 0,
    epoch: 0,
  });

  collector = await world.createWallet();
  deployer = await world.createWallet({
    balance: 10_000_000_000n,
    kvs: [
      e.kvs.Dcdts([
        {
          id: TOKEN_ID,
          amount: 100_000,
        },
        {
          id: TOKEN_ID2,
          amount: 10_000,
        },
      ]),
    ],
  });
  user = await world.createWallet({
    balance: BigInt('100000000000000000'),
    kvs: [
      e.kvs.Dcdts([
        {
          id: TOKEN_ID,
          amount: 100_000,
        },
        {
          id: TOKEN_ID2,
          amount: 10_000,
        },
      ]),
    ],
  });
  otherUser = await world.createWallet({
    balance: BigInt('10000000000000000'),
  });

  await deployContracts(deployer, collector);
});

afterEach(async () => {
  await world.terminate();
});

describe('Register token metadata', () => {
  test('Register token metadata', async () => {
    await user.callContract({
      callee: its,
      funcName: 'registerTokenMetadata',
      gasLimit: 100_000_000,
      funcArgs: [e.Str(TOKEN_ID)],
      value: 100,
    });

    let kvs = await its.getAccount();
    assertAccount(kvs, {
      balance: 100n,
      hasKvs: [
        ...baseItsKvs(deployer),

        e.kvs
          .Mapper('CB_CLOSURE................................')
          .Value(
            e.Tuple(
              e.Str('register_token_metadata_callback'),
              e.TopBuffer('00000003'),
              e.Buffer(e.Str(TOKEN_ID).toTopU8A()),
              e.U(100),
              e.Buffer(user.toTopU8A())
            )
          ),
      ],
    });
  });

  test('Errors', async () => {
    await user
      .callContract({
        callee: its,
        funcName: 'registerTokenMetadata',
        gasLimit: 100_000_000,
        funcArgs: [e.Str('')],
      })
      .assertFail({ code: 4, message: 'Invalid token identifier' });
  });
});
