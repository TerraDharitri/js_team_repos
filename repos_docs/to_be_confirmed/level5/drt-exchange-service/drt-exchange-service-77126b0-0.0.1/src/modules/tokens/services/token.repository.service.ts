import { BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EntityRepository } from 'src/services/database/repositories/entity.repository';
import { CreateTokenDto } from '../dto/create.token.dto';
import { DcdtTokenDbModel, TokenDocument } from '../schemas/token.schema';

export class TokenRepositoryService extends EntityRepository<TokenDocument> {
    constructor(
        @InjectModel(DcdtTokenDbModel.name)
        private readonly dcdtTokenModel: Model<TokenDocument>,
    ) {
        super(dcdtTokenModel);
    }

    async updateToken(updateTokenDto: CreateTokenDto): Promise<void> {
        const updatedToken = await this.dcdtTokenModel
            .findOneAndUpdate(
                {
                    tokenID: updateTokenDto.tokenID,
                },
                { type: updateTokenDto.type },
                {
                    useFindAndModify: false,
                },
            )
            .exec();

        if (!updatedToken) {
            throw new BadRequestException('Token does not exist');
        }
    }

    async getTokenType(tokenID: string): Promise<string> {
        const dcdtToken = await this.dcdtTokenModel
            .findOne()
            .where('tokenID')
            .equals(tokenID)
            .exec();
        return dcdtToken ? dcdtToken.type : 'Unlisted';
    }
}
