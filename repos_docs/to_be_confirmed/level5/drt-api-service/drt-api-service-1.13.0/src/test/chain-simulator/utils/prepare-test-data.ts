import { config } from '../config/env.config';
import { fundAddress, issueMultipleDcdts, issueMultipleMetaDCDTCollections, issueMultipleNftsCollections } from './chain.simulator.operations';
import { ChainSimulatorUtils } from './test.utils';

async function prepareTestData() {
  try {
    console.log('Starting test data preparation...');

    console.log('Waiting for epoch 2...');
    await ChainSimulatorUtils.waitForEpoch(2);
    console.log('✓ Chain simulator reached epoch 2');

    await fundAddress(config.chainSimulatorUrl, config.aliceAddress);
    console.log('✓ Funded address');

    await issueMultipleDcdts(config.chainSimulatorUrl, config.aliceAddress, 5);
    console.log('✓ Issued DCDTs');

    await issueMultipleNftsCollections(config.chainSimulatorUrl, config.aliceAddress, 2, 5, 'both');
    console.log('✓ Issued NFT collections');

    await issueMultipleMetaDCDTCollections(config.chainSimulatorUrl, config.aliceAddress, 2, 5);
    console.log('✓ Issued Meta-DCDT collections');

    await ChainSimulatorUtils.deployPingPongSc(config.aliceAddress);
    console.log('✓ Deployed PingPong smart contract');

    await new Promise((resolve) => setTimeout(resolve, 30000));

    console.log('Test data preparation completed successfully!');
  } catch (error) {
    console.error('Error preparing test data:', error);
    process.exit(1);
  }
}

void prepareTestData();
