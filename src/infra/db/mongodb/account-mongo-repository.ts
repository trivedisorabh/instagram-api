import { AccountRepository } from '@/data';
import { AccountModel } from '@/domain';
import { MongoHelper } from '@/infra';

export class AccountMongoRepository implements AccountRepository {
  async add(params: AccountRepository.AddParams): Promise<boolean> {
    const collection = MongoHelper.getCollection('accounts');
    const result = await collection.insertOne(params);
    return !!result.insertedId;
  }

  async auth(params: AccountRepository.AuthParams): Promise<AccountRepository.AuthResult> {
    return null;
  }

  async loadByEmail(params: AccountRepository.LoadByEmailParams): Promise<AccountModel> {
    const collection = MongoHelper.getCollection('accounts');
    const account = await collection.findOne({ email: params.email });

    return account && MongoHelper.map(account);
  }
}
