import { EventProcessor } from "../src/event.processor";

const eventProcessor = new EventProcessor();

async function run() {
  let lastProcessedTimestamp = 1727858320;

  while (true) {
    console.log('Running event processor');
    await eventProcessor.start({
      elasticUrl: 'https://index.dharitri.org',
      eventIdentifiers: ['swapTokensFixedInput'],
      emitterAddresses: ['drt1qqqqqqqqqqqqqpgqt0uek344kaerr4gf9g2r8l0f4l8ygyha2jps6ktxqy'],
      pageSize: 1000,
      scrollTimeout: "1m",
      delayBetweenRequestsInMilliseconds: 100,
      getLastProcessedTimestamp: async () => {
        return lastProcessedTimestamp;
      },
      setLastProcessedTimestamp: async (timestamp: number) => {
        lastProcessedTimestamp = timestamp;
      },
      onEventsReceived: async (highestTimestamp, events) => {
        console.log(`Received ${events.length} events with the highest timestamp ${highestTimestamp}`);
      },
    });

    await new Promise(f => setTimeout(f, 6000));
  }
}

void run();
