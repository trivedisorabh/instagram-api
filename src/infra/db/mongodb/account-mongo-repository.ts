import { AddAccountRepository, LoadByEmailRepository, UpdateAccessTokenRepository } from '@/data';
import { AccountModel } from '@/domain';
import { MongoHelper } from '@/infra';

import { ObjectId } from 'mongodb';

export class AccountMongoRepository
  implements AddAccountRepository, LoadByEmailRepository, UpdateAccessTokenRepository
{
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

  async updateAccessToken(params: UpdateAccessTokenRepository.UpdateParams): Promise<void> {
    const collection = MongoHelper.getCollection('accounts');
    await collection.updateOne(
      { _id: new ObjectId(params.id) },
      {
        $set: { accessToken: params.accessToken },
      },
    );
  }
}
