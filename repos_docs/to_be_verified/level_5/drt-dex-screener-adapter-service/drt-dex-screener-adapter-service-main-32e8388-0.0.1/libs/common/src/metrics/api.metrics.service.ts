import { MetricsService } from "@terradharitri/sdk-nestjs-monitoring";
import { Injectable } from "@nestjs/common";
import { register, Histogram } from 'prom-client';
import { LogMetricsEvent, MetricsEvents } from "../utils";
import { OnEvent } from "@nestjs/event-emitter";

@Injectable()
export class ApiMetricsService {
  private static indexerDurationHistogram: Histogram<string>;
  private static DharitriXDurationHistogram: Histogram<string>;
  private static onedexDurationHistogram: Histogram<string>;
  private static vmQueryDurationHistogram: Histogram<string>;

  constructor(
    private readonly metricsService: MetricsService,
  ) {
    if (!ApiMetricsService.indexerDurationHistogram) {
      ApiMetricsService.indexerDurationHistogram = new Histogram({
        name: 'indexer_duration',
        help: 'Indexer Duration',
        labelNames: ['action'],
        buckets: [],
      });
    }

    if (!ApiMetricsService.DharitriXDurationHistogram) {
      ApiMetricsService.DharitriXDurationHistogram = new Histogram({
        name: 'dharitrix_duration',
        help: 'DharitriX Duration',
        labelNames: ['action'],
        buckets: [],
      });
    }

    if (!ApiMetricsService.onedexDurationHistogram) {
      ApiMetricsService.onedexDurationHistogram = new Histogram({
        name: 'onedex_duration',
        help: 'OneDex Duration',
        labelNames: ['action'],
        buckets: [],
      });
    }

    if (!ApiMetricsService.vmQueryDurationHistogram) {
      ApiMetricsService.vmQueryDurationHistogram = new Histogram({
        name: 'vm_query_duration',
        help: 'VM Query Duration',
        labelNames: ['endpoint'],
        buckets: [],
      });
    }
  }

  @OnEvent(MetricsEvents.SetIndexerDuration)
  setIndexerDurationHistogram(payload: LogMetricsEvent) {
    const [action, duration] = payload.args;
    this.metricsService.setExternalCall('indexer', duration);
    ApiMetricsService.indexerDurationHistogram.labels(action).observe(duration);
  }

  @OnEvent(MetricsEvents.SetDharitrixDuration)
  setDharitrixDurationHistogram(payload: LogMetricsEvent) {
    const [action, duration] = payload.args;
    this.metricsService.setExternalCall('dharitrix', duration);
    ApiMetricsService.DharitriXDurationHistogram.labels(action).observe(duration);
  }

  @OnEvent(MetricsEvents.SetOneDexDuration)
  setOneDexDurationHistogram(payload: LogMetricsEvent) {
    const [action, duration] = payload.args;
    this.metricsService.setExternalCall('onedex', duration);
    ApiMetricsService.onedexDurationHistogram.labels(action).observe(duration);
  }

  setVmQueryDurationHistogram(endpoint: string, duration: number) {
    this.metricsService.setExternalCall('gateway', duration);
    ApiMetricsService.vmQueryDurationHistogram.labels(endpoint).observe(duration);
  }

  async getMetrics(): Promise<string> {
    const baseMetrics = await this.metricsService.getMetrics();
    const currentMetrics = await register.metrics();

    return baseMetrics + '\n' + currentMetrics;
  }
}
