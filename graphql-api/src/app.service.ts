import { Injectable } from '@nestjs/common';
import { Query } from '@nestjs/graphql';

@Injectable()
export class AppService {
  @Query(() => String)
  async isAlive(): Promise<string> {
    return 'OK';
  }
}
