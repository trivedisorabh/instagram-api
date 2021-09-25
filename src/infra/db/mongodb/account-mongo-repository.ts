import { AccountRepository } from '@/data';
import { AccountModel } from '@/domain';
import { MongoHelper } from '@/infra';

export class AccountMongoRepository implements AccountRepository {
  async add(params: AccountRepository.AddParams): Promise<AccountModel> {
    const collection = MongoHelper.getCollection('accounts');
    const result = await collection.insertOne(params);
    return result[0];
  }
}
