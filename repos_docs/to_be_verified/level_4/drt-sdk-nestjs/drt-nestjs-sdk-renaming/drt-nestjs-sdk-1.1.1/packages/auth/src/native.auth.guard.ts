import { Injectable, CanActivate, ExecutionContext, Optional, Inject } from '@nestjs/common';
import { CacheService } from '@terradharitri/sdk-nestjs-cache';
import { NativeAuthError, NativeAuthServer } from '@terradharitri/sdk-native-auth-server';
import { DecoratorUtils, DrtnestConfigService, DRTNEST_CONFIG_SERVICE, UrlUtils, ExecutionContextUtils } from '@terradharitri/sdk-nestjs-common';
import { PerformanceProfiler } from '@terradharitri/sdk-nestjs-monitoring';
import { NativeAuthInvalidOriginError } from './errors/native.auth.invalid.origin.error';
import { NoAuthOptions } from './decorators';

/**
 * This Guard protects all routes that do not have the `@NoAuth` decorator and sets the `X-Native-Auth-*` HTTP headers.
 *
 * @return {boolean} `canActivate` returns true if the Authorization header is a valid Native-Auth token.
 */
@Injectable()
export class NativeAuthGuard implements CanActivate {
  private readonly authServer: NativeAuthServer;

  constructor(
    @Inject(DRTNEST_CONFIG_SERVICE) drtnestConfigService: DrtnestConfigService,
    @Optional() cacheService?: CacheService,
  ) {
    this.authServer = new NativeAuthServer({
      apiUrl: drtnestConfigService.getApiUrl(),
      maxExpirySeconds: drtnestConfigService.getNativeAuthMaxExpirySeconds(),
      acceptedOrigins: drtnestConfigService.getNativeAuthAcceptedOrigins(),
      cache: {
        getValue: async function <T>(key: string): Promise<T | undefined> {
          if (key === 'block:timestamp:latest') {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            return new Date().getTime() / 1000;
          }

          if (cacheService) {
            return await cacheService.get<T>(key);
          }

          throw new Error('CacheService is not available in the context');
        },
        setValue: async function <T>(key: string, value: T, ttl: number): Promise<void> {
          if (cacheService) {
            return await cacheService.set<T>(key, value, ttl);
          }

          throw new Error('CacheService is not available in the context');
        },
      },
    });
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const noAuthMetadata = DecoratorUtils.getMethodDecorator(NoAuthOptions, context.getHandler());
    if (noAuthMetadata) {
      return true;
    }

    const request = ExecutionContextUtils.getRequest(context);
    const response = ExecutionContextUtils.getResponse(context);
    const headers = ExecutionContextUtils.getHeaders(context);

    const origin = headers['origin'];

    const authorization: string = headers['authorization'];
    if (!authorization) {
      return false;
    }

    const jwt = authorization.replace('Bearer ', '');
    const profiler = new PerformanceProfiler();

    try {
      const userInfo = await this.authServer.validate(jwt);
      profiler.stop();

      if (!UrlUtils.isLocalhost(origin) && origin !== userInfo.origin && origin !== 'https://' + userInfo.origin) {
        throw new NativeAuthInvalidOriginError(userInfo.origin, origin);
      }

      if (response) {
        response.set('X-Native-Auth-Issued', userInfo.issued);
        response.set('X-Native-Auth-Expires', userInfo.expires);
        response.set('X-Native-Auth-Address', userInfo.address);
        response.set('X-Native-Auth-Timestamp', Math.round(new Date().getTime() / 1000));
        response.set('X-Native-Auth-Duration', profiler.duration);
      }

      if (request) {
        request.nativeAuth = userInfo;
        request.jwt = userInfo;
      }

      return true;
    } catch (error) {
      if (error instanceof NativeAuthError) {
        // @ts-ignore
        const message = error?.message;
        if (message) {
          profiler.stop();
          request.res.set('X-Native-Auth-Error-Type', error.constructor.name);
          request.res.set('X-Native-Auth-Error-Message', message);
          request.res.set('X-Native-Auth-Duration', profiler.duration);
        }
      }

      return false;
    }
  }
}
