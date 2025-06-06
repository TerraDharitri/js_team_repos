import axios from 'axios';

export const getStats = async ({
  proxyUrl,
  elasticUrl,
  metaChainShardId
}: {
  proxyUrl: string;
  elasticUrl: string;
  metaChainShardId?: number;
}) => {
  try {
    const [
      {
        data: {
          data: {
            config: {
              drt_num_shards_without_meta: shards,
              drt_round_duration: refreshRate
            }
          }
        }
      },
      {
        data: {
          data: {
            status: {
              drt_epoch_number: epoch,
              drt_rounds_passed_in_current_epoch: roundsPassed,
              drt_rounds_per_epoch: roundsPerEpoch
            }
          }
        }
      },
      {
        data: { count: blocks }
      },
      {
        data: { count: accounts }
      },
      {
        data: { count: transactions }
      }
    ] = await Promise.all([
      axios.get(`${proxyUrl}/network/config`),
      axios.get(`${proxyUrl}/network/status/${metaChainShardId}`),
      axios.get(`${elasticUrl}/blocks/_count`),
      axios.get(`${elasticUrl}/accounts/_count`),
      axios.get(`${elasticUrl}/transactions/_count`)
    ]);
    return {
      data: {
        shards,
        blocks,
        accounts,
        transactions,
        refreshRate,
        epoch,
        roundsPassed,
        roundsPerEpoch
      }
    };
  } catch (error) {
    console.error('stats error', error);
    throw new Error(error as any);
  }
};
