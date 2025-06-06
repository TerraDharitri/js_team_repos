import { Injectable, Logger } from '@nestjs/common';
import { fileStorage } from 'src/config';
import { UploadToIpfsResult } from './ipfs.model';
import { FileContent } from './file.content';
import { PinataUploadError } from 'src/common/models/errors/pinata-upload.error';
const axios = require('axios');

const FormData = require('form-data');

@Injectable()
export class PinataService {
  constructor(private readonly logger: Logger) {}

  async uploadFile(file: any): Promise<UploadToIpfsResult> {
    const url = `${process.env.PINATA_API_URL}/pinning/pinFileToIPFS`;
    const readStream = await file.createReadStream();

    const data = new FormData();
    data.append('file', readStream, file.filename);

    try {
      const response = await axios.post(url, data, {
        maxContentLength: 'Infinity',
        maxBodyLength: 'Infinity',
        headers: {
          'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      });
      return this.mapReturnType(response.data.IpfsHash);
    } catch (error) {
      this.logger.error(
        'An error occurred while trying to add file to pinata.',
        {
          path: 'PinataService.uploadFile',
          exception: error,
          cacheKey: file,
        },
      );
      throw new PinataUploadError(
        'An error has occoured while uploading in IPFS, please try again.',
      );
    }
  }

  async uploadText(fileMetadata: FileContent): Promise<UploadToIpfsResult> {
    const url = `${process.env.PINATA_API_URL}/pinning/pinJSONToIPFS`;
    try {
      const response = await axios.post(url, fileMetadata, {
        headers: {
          Authorization: `Bearer ${process.env.PINATA_JWT}`,
        },
      });

      return this.mapReturnType(response.data.IpfsHash);
    } catch (error) {
      this.logger.error(
        'An error occurred while trying to add file to pinata.',
        {
          path: 'PinataService.uploadText',
          exception: error,
          cacheKey: fileMetadata,
        },
      );
      throw new PinataUploadError(
        'An error has occoured while uploading in IPFS, please try again.',
      );
    }
  }

  private getUrl(path: any) {
    return `${fileStorage.cdnUrl}${path}`;
  }

  private mapReturnType(
    path: any,
  ): UploadToIpfsResult | PromiseLike<UploadToIpfsResult> {
    return new UploadToIpfsResult({
      hash: path,
      url: this.getUrl(path),
    });
  }
}
