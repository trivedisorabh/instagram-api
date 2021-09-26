import { makeDbAddAccount, makeDbLoadAccountByEmail } from '@/main';
import { AddAccountController } from '@/presentation';
import { Controller } from '@/presentation';

import { makeAddAccountValidation } from '@/main';

export const makeAddAccountController = (): Controller => {
  return new AddAccountController(
    makeAddAccountValidation(),
    makeDbAddAccount(),
    makeDbLoadAccountByEmail(),
  );
};
