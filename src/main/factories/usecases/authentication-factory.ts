import { DbAuthentication } from '@/data';
import { Authentication } from '@/domain';
import { AccountMongoRepository, BcryptAdapter, JsonWebTokenAdapter } from '@/infra';
import { env } from '@/main';

export const makeDbAuthentication = (): Authentication => {
  const accountMongoRepository = new AccountMongoRepository();
  const bcryptAdapter = new BcryptAdapter();
  const jsonWebTokenAdapter = new JsonWebTokenAdapter(env.authSecret);

  return new DbAuthentication(
    accountMongoRepository,
    bcryptAdapter,
    jsonWebTokenAdapter,
    accountMongoRepository,
  );
};
