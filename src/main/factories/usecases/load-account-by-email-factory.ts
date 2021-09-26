import { DbLoadAccountByEmail } from '@/data';
import { LoadAccountByEmail } from '@/domain';
import { AccountMongoRepository } from '@/infra';

export const makeDbLoadAccountByEmail = (): LoadAccountByEmail => {
  const accountMongoRepository = new AccountMongoRepository();

  return new DbLoadAccountByEmail(accountMongoRepository);
};
