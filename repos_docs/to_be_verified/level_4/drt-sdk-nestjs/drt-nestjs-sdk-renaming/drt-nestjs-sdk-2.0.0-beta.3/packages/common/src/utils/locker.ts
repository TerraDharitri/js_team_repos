import { Logger } from "@nestjs/common";
import { MetricsService, CpuProfiler, PerformanceProfiler } from "@terradharitri/sdk-nestjs-monitoring";
import { ContextTracker } from "./context.tracker";

export class Locker {
  private static lockArray: string[] = [];

  static async lock(key: string, func: () => Promise<void>, log: boolean = false): Promise<LockResult> {
    const logger = new Logger('Lock');

    if (Locker.lockArray.includes(key)) {
      logger.log(`${key} is already running`);
      return LockResult.ALREADY_RUNNING;
    }

    Locker.lockArray.push(key);

    const profiler = new PerformanceProfiler();
    const cpuProfiler = log ? new CpuProfiler() : undefined;

    ContextTracker.assign({ origin: key });

    try {
      await func();

      profiler.stop();
      cpuProfiler?.stop(log ? `Running ${key}` : undefined);

      MetricsService.setJobResult(key, 'success', profiler.duration);

      return LockResult.SUCCESS;
    } catch (error) {
      logger.error(`Error running ${key}`);
      logger.error(error);

      profiler.stop();
      cpuProfiler?.stop(log ? `Running ${key}` : undefined);

      MetricsService.setJobResult(key, 'error', profiler.duration);

      return LockResult.ERROR;
    } finally {
      Locker.lockArray.remove(key);
    }
  }
}

export enum LockResult {
  SUCCESS = 'success',
  ALREADY_RUNNING = 'alreadyRunning',
  ERROR = 'error'
}
