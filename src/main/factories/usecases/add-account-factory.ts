import { DbAddAccount } from '@/data';
import { AddAccount } from '@/domain';
import { AccountMongoRepository, BcryptAdapter } from '@/infra';

export const makeDbAddAccount = (): AddAccount => {
  const accountMongoRepository = new AccountMongoRepository();
  const bcryptAdapter = new BcryptAdapter(12);

  return new DbAddAccount(accountMongoRepository, bcryptAdapter);
};
