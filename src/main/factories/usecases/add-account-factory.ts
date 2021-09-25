import { DbAddAccount } from '@/data';
import { AddAccount } from '@/domain';
import { AccountMongoRepository } from '@/infra';

export const makeDbAddAccount = (): AddAccount => {
  const accountMongoRepository = new AccountMongoRepository();

  return new DbAddAccount(accountMongoRepository);
};
