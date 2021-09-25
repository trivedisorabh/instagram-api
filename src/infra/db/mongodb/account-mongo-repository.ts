import { AccountRepository } from '@/data';
import { MongoHelper } from '@/infra';

export class AccountMongoRepository implements AccountRepository {
  async add(params: AccountRepository.AddParams): Promise<boolean> {
    console.log({ params });
    const collection = MongoHelper.getCollection('accounts');
    const result = await collection.insertOne(params);
    return !!result.insertedId;
  }
}
