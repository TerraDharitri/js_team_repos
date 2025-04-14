import { forwardRef, Inject, Injectable, Logger } from "@nestjs/common";
import axios, { AxiosRequestConfig } from "axios";
import Agent from 'agentkeepalive';
import { PerformanceProfiler, MetricsService } from "@terradharitri/sdk-nestjs-monitoring";
import { ApiSettings } from "./entities/api.settings";
import { ApiModuleOptions } from "./entities/api.module.options";
import { PendingExecuter } from "@terradharitri/sdk-nestjs-common";

@Injectable()
export class ApiService {
  private readonly defaultTimeout: number = 30000;
  private keepaliveAgent: Agent | undefined | null = null;

  constructor(
    private readonly options: ApiModuleOptions,
    @Inject(forwardRef(() => MetricsService))
    private readonly metricsService: MetricsService,
  ) { }

  private getKeepAliveAgent(): Agent | undefined {
    if (this.keepaliveAgent === null) {
      if (this.options.useKeepAliveAgent) {
        this.keepaliveAgent = new Agent({
          keepAlive: true,
          maxSockets: Infinity,
          maxFreeSockets: 10,
          timeout: this.options.axiosTimeout, // active socket keepalive
          freeSocketTimeout: 30000, // free socket keepalive for 30 seconds
        });
      } else {
        this.keepaliveAgent = undefined;
      }
    }

    return this.keepaliveAgent;
  }


  private async getConfig(settings: ApiSettings): Promise<AxiosRequestConfig> {
    const timeout = settings.timeout || this.defaultTimeout;
    const maxRedirects = settings.skipRedirects === true ? 0 : undefined;

    const headers = settings.headers ?? {};

    const rateLimiterSecret = this.options.rateLimiterSecret;
    if (rateLimiterSecret) {
      headers['x-rate-limiter-secret'] = rateLimiterSecret;
    }

    if (settings.nativeAuthSigner) {
      const accessTokenInfo = await settings.nativeAuthSigner.getToken();
      headers['authorization'] = `Bearer ${accessTokenInfo.token}`;
    }

    return {
      timeout,
      maxRedirects,
      httpAgent: this.getKeepAliveAgent(),
      responseType: settings.responseType,
      headers,
      transformResponse: [
        (data) => {
          try {
            return JSON.parse(data);
          } catch (error) {
            return data;
          }
        },
      ],
    };
  }

  private requestsExecuter = new PendingExecuter();

  async get(url: string, settings: ApiSettings = new ApiSettings(), errorHandler?: (error: any) => Promise<boolean>): Promise<any> {
    const profiler = new PerformanceProfiler();

    const config = await this.getConfig(settings);

    try {
      return await this.requestsExecuter.execute(url, async () => await axios.get(url, config));
    } catch (error: any) {
      let handled = false;
      if (errorHandler) {
        handled = await errorHandler(error);
      }

      if (!handled) {
        const customError = this.getCustomError('GET', url, null, error);

        const logger = new Logger(ApiService.name);
        logger.error(customError);

        throw customError;
      }
    } finally {
      profiler.stop();
      this.metricsService.setExternalCall(this.getHostname(url), profiler.duration);
    }
  }

  async put(url: string, data: any, settings: ApiSettings = new ApiSettings(), errorHandler?: (error: any) => Promise<boolean>): Promise<any> {
    const profiler = new PerformanceProfiler();

    try {
      const config = await this.getConfig(settings);

      return await axios.put(url, data, config);
    } catch (error: any) {
      let handled = false;
      if (errorHandler) {
        handled = await errorHandler(error);
      }

      if (!handled) {
        const logger = new Logger(ApiService.name);
        const customError = {
          method: 'PUT',
          url,
          response: error.response?.data,
          status: error.response?.status,
          message: error.message,
          name: error.name,
        };

        logger.error(customError);

        throw customError;
      }
    } finally {
      profiler.stop();
      this.metricsService.setExternalCall(this.getHostname(url), profiler.duration);
    }
  }

  async post(url: string, data: any, settings: ApiSettings = new ApiSettings(), errorHandler?: (error: any) => Promise<boolean>): Promise<any> {
    const profiler = new PerformanceProfiler();
    try {
      const config = await this.getConfig(settings);

      const response = await axios.post(url, data, config);
      return response;
    } catch (error: any) {
      let handled = false;
      if (errorHandler) {
        handled = await errorHandler(error);
      }

      if (!handled) {
        const customError = this.getCustomError('POST', url, data, error);

        const logger = new Logger(ApiService.name);
        logger.error(customError);

        throw customError;
      }
    } finally {
      profiler.stop();
      this.metricsService.setExternalCall(this.getHostname(url), profiler.duration);
    }
  }

  async delete(url: string, data: any, settings: ApiSettings = new ApiSettings(), errorHandler?: (error: any) => Promise<boolean>): Promise<any> {
    const profiler = new PerformanceProfiler();
    try {
      const config = await this.getConfig(settings);

      const response = await axios.delete(url, {
        data,
        ...config,
      });
      return response;
    } catch (error: any) {
      let handled = false;
      if (errorHandler) {
        handled = await errorHandler(error);
      }

      if (!handled) {
        const customError = this.getCustomError('DELETE', url, data, error);

        const logger = new Logger(ApiService.name);
        logger.error(customError);

        throw customError;
      }
    } finally {
      profiler.stop();
      this.metricsService.setExternalCall(this.getHostname(url), profiler.duration);
    }
  }

  async head(url: string, settings: ApiSettings = new ApiSettings(), errorHandler?: (error: any) => Promise<boolean>): Promise<any> {
    const profiler = new PerformanceProfiler();

    try {
      const config = await this.getConfig(settings);

      const response = await axios.head(url, config);
      return response;
    } catch (error: any) {
      let handled = false;
      if (errorHandler) {
        handled = await errorHandler(error);
      }

      if (!handled) {
        const customError = this.getCustomError('HEAD', url, null, error);

        const logger = new Logger(ApiService.name);
        logger.error(customError);

        throw customError;
      }
    } finally {
      profiler.stop();
      this.metricsService.setExternalCall(this.getHostname(url), profiler.duration);
    }
  }

  private getHostname(url: string): string {
    return new URL(url).hostname;
  }

  private getCustomError(method: string, url: string, data: any, error: any): any {
    return {
      method,
      url,
      body: data,
      response: error.response?.data,
      status: error.response?.status,
      message: error.message,
      name: error.name,
      stack: error.stack,
    };
  }
}
