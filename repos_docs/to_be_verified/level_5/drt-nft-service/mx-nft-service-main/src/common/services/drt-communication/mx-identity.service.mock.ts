import { Injectable } from '@nestjs/common';

@Injectable()
export class DrtIdentityServiceMock {
  async getAcountsByHerotag(searchTerm: string): Promise<any> {
    return Promise.resolve({ herotags: [searchTerm] });
  }

  async getAddressByHerotag(searchTerm: string): Promise<any> {
    return Promise.resolve({ herotags: searchTerm, address: 'address' });
  }
}
