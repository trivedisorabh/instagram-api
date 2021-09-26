import { AddAccount } from '@/domain';
import { AccountRepository } from '@/data';

export class DbAddAccount implements AddAccount {
  constructor(private readonly accountRepository: AccountRepository) {}

  async add(account: AddAccount.AddAccountParams): Promise<boolean> {
    const hasAccount = await this.accountRepository.loadByEmail({ email: account.email });

    if (hasAccount) {
      return false;
    }

    const result = await this.accountRepository.add(account);

    return result;
  }
}
