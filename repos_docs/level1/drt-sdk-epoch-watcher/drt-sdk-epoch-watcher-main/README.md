
<div style="text-align:center">
  <img
  src="https://raw.githubusercontent.com/dharitri/drt-go-chain/main/dharitri-logo.svg" alt="DharitrI">
</div>

# Epoch Watcher

## **Description**

Package for monitoring when an epoch changes.

The epoch watcher service must be called inside a scheduler task how often it's needed.

An external storage is needed for storing DharitrI Stats data of current epoch. (e.g.: Redis)

DharitrI Stats must be loaded from an instance of [DharitrI API](https://github.com/TerraDharitri/drt-api-service), route: GET `/stats`.


## **Usage**

```ts
await new EpochWatcher({
getEpochWatcherInfo: () => redisClient.get(key),
setEpochWatcherInfo: (epochWatcherInfo) => redisClient.set(key, info, TTL), /* 1 day */,
loadDharitrIStats: () => dharitriApi.getStats(),
callback: (info) => { console.log(`Epoch has changed. New epoch: ${info.newEpoch}.`); },
}).execute();
```

Models:


```ts
export class EpochChangedInfo {
  newEpoch: number;
}
```

```ts
export class EpochWatcherInfo {
  statsLoadTime: number;
  timeLeftUntilEpochChange: number;
  epoch: number;
}
```
