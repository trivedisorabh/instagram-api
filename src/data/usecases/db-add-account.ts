import { AccountModel, AddAccount } from '@/domain';
import { AccountRepository } from '@/data';

export class DbAddAccount implements AddAccount {
  constructor(private readonly accountRepository: AccountRepository) {}

  async add(account: AddAccount.AddAccountParams): Promise<AccountModel> {
    const result = await this.accountRepository.add(account);
    return result;
  }
}
