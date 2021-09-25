import { makeDbAddAccount } from '@/main';
import { AddAccountController } from '@/presentation';
import { Controller } from '@/presentation';

export const makeAddAccountController = (): Controller => {
  return new AddAccountController(makeDbAddAccount());
};
