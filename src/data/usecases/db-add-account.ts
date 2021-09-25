import { AccountModel, AddAccount } from 'domain';

export class DbAddAccount implements AddAccount {
  constructor() {}

  async add(account: AddAccount.AddAccountParams): Promise<AccountModel> {
    return null;
  }
}
