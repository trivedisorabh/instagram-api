import { DbAuthentication } from '@/data';
import { Authentication } from '@/domain';
import { AccountMongoRepository, BcryptAdapter } from '@/infra';

export const makeDbAuthentication = (): Authentication => {
  const accountMongoRepository = new AccountMongoRepository();
  const bcryptAdapter = new BcryptAdapter();

  return new DbAuthentication(accountMongoRepository, bcryptAdapter);
};
