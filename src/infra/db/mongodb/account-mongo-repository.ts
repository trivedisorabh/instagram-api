import { AddAccountRepository, LoadByEmailRepository } from '@/data';
import { AccountModel } from '@/domain';
import { MongoHelper } from '@/infra';

export class AccountMongoRepository implements AddAccountRepository, LoadByEmailRepository {
  async add(params: AddAccountRepository.AddParams): Promise<boolean> {
    const collection = MongoHelper.getCollection('accounts');
    const result = await collection.insertOne(params);
    return !!result.insertedId;
  }

  async loadByEmail(params: LoadByEmailRepository.LoadByEmailParams): Promise<AccountModel> {
    const collection = MongoHelper.getCollection('accounts');
    const account = await collection.findOne({ email: params.email });

    return account && MongoHelper.map(account);
  }
}
