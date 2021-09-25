import { AccountModel } from '@/domain';

export interface AddAccount {
  add(account: AddAccount.AddAccountParams): Promise<boolean>;
}

export namespace AddAccount {
  export type AddAccountParams = Omit<AccountModel, 'id'>;
}
