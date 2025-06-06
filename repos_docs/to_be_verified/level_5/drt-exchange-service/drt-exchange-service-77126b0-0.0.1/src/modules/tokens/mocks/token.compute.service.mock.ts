import { Tokens } from 'src/modules/pair/mocks/pair.constants';
import { TokenComputeService } from '../services/token.compute.service';

export class TokenComputeServiceMock {
    async tokenPriceDerivedrewa(tokenID: string): Promise<string> {
        return Tokens(tokenID).derivedrewa;
    }
    async getAllTokensPriceDerivedUSD(tokenIDs: string[]): Promise<string[]> {
        return tokenIDs.map((tokenID) => Tokens(tokenID).price);
    }
}

export const TokenComputeServiceProvider = {
    provide: TokenComputeService,
    useClass: TokenComputeServiceMock,
};
