import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class BaseConfigService {
  constructor(protected readonly configService: ConfigService) { }

  get<T = any>(key: string): T | undefined {
    const envOverride = this.tryGetEnvOverride<T>(key);
    if (envOverride || envOverride === false) {
      return envOverride;
    }

    const configValue = this.configService.get<T>(key);

    if (configValue === undefined) {
      return undefined;
    }

    if (typeof configValue !== 'string') {
      return configValue;
    }

    return this.tryGetEnvValue<T>(key, configValue);
  }

  private tryGetEnvOverride<T>(key: string): T | undefined {
    const overridePrefix = 'DRT_OVERRIDE_';
    const envKey = key
      // Replace any non-uppercase sequence before an uppercase letter or number with that letter/number prefixed by an underscore
      .replace(/([a-z])([A-Z])/g, '$1_$2')
      // Handle the scenario where a group of uppercase letters is followed by a lowercase letter
      .replace(/([A-Z])([A-Z])([a-z])/g, '$1_$2$3')
      // Replace non-alphanumeric characters with underscores
      .replace(/[^a-zA-Z0-9]/g, '_')
      // Convert the whole string to uppercase
      .toUpperCase();

    const envValue = this.configService.get(overridePrefix + envKey);
    if (!envValue) {
      return undefined;
    }

    const strValue = this.trimPrefix(envValue, 'str:');
    if (strValue) {
      return strValue as T;
    }

    const numValue = this.trimPrefix(envValue, 'num:');
    if (numValue) {
      return this.parseValueAsNumber(numValue) as T;
    }

    const boolValue = this.trimPrefix(envValue, 'bool:');
    if (boolValue) {
      return this.parseValueAsBoolean(boolValue) as T;
    }

    const jsonValue = this.trimPrefix(envValue, 'json:');
    if (jsonValue) {
      return this.parseValueAsJson(jsonValue) as T;
    }

    const arrStrValue = this.trimPrefix(envValue, 'arr:str:');
    if (arrStrValue) {
      return this.parseValueAsArray(arrStrValue, 'str') as T;
    }

    const arrNumValue = this.trimPrefix(envValue, 'arr:num:');
    if (arrNumValue) {
      return this.parseValueAsArray(arrNumValue, 'num') as T;
    }

    return envValue as T;
  }

  private trimPrefix(key: string, prefix: string): string | undefined {
    if (key.startsWith(prefix)) {
      return key.slice(prefix.length);
    }

    return undefined;
  }

  private tryGetEnvValue<T>(key: string, value: string): T | undefined {
    const regex = /\$\{([^}]+)\}/;
    const match = value.match(regex);

    if (!match) {
      return value as T;
    }

    let keyName = match[1];
    const keySegments = keyName.split(':');

    if (keySegments.length === 0) {
      throw new Error(`Could not parse config key ${key}`);
    }

    if (keySegments.length === 1) {
      return this.configService.get(keyName);
    }

    keyName = keySegments.pop() as string;
    if (keyName === '') {
      throw new Error(`Could not parse config key ${key}`);
    }

    const envValue = this.configService.get(keyName);

    if (keySegments[0] === 'arr') {
      const expectedType = keySegments.length === 1 ? 'str' : keySegments[1];

      return this.parseValueAsArray(envValue, expectedType);
    }

    if (envValue === undefined) {
      return envValue;
    }

    return this.parseValue(envValue, keySegments[0]);
  }

  private parseValue(value: string, valueType: string): any {
    switch (valueType) {
      case 'str':
        return value;
      case 'bool':
        return this.parseValueAsBoolean(value);
      case 'num':
        return this.parseValueAsNumber(value);
      case 'json':
        return this.parseValueAsJson(value);
      default:
        throw new Error(`Cannot parse config value ${value} as ${valueType}`);
    }
  }

  private parseValueAsJson(value: string): any {
    try {
      return JSON.parse(value);
    } catch (error) {
      throw new Error(`Could not parse config value ${value} as json`);
    }
  }

  private parseValueAsNumber(value: string): number {
    if (value.trim() === '') {
      throw new Error(`Cannot parse config value ${value} as a number`);
    }

    if (isNaN(Number(value))) {
      throw new Error(`Cannot parse config value ${value} as a number`);
    }

    return Number(value);
  }

  private parseValueAsBoolean(value: string): boolean {
    if (value === 'true') {
      return true;
    }

    if (value === 'false') {
      return false;
    }

    throw new Error(`Cannot parse config value ${value} as a boolean`);
  }

  private parseValueAsArray(value: string | undefined, valueType: string): any {
    if (value === undefined || value === '') {
      return [];
    }

    const elements = value.split(',');
    if (valueType === 'str') {
      return elements;
    }

    const result = elements.map(element => this.parseValue(element, valueType));

    return result;
  }
}
