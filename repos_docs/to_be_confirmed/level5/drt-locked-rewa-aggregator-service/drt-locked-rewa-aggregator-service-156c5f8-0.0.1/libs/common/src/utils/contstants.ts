import { Constants } from "@terradharitri/sdk-nestjs-common";

export const TABLE_PREFIX = 'data_api_';

export class UtilConstants extends Constants {
    static sqlDateFormat(): string {
        return 'yyyy-MM-DD HH:mm:ss';
    }
}
