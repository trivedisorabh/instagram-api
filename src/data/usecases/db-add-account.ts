import { AddAccount } from '@/domain';
import { AccountRepository, Hasher } from '@/data';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly hasher: Hasher,
  ) {}

  async add(account: AddAccount.AddAccountParams): Promise<boolean> {
    const hasAccount = await this.accountRepository.loadByEmail({ email: account.email });

    if (hasAccount) {
      return false;
    }

    const hashedPassword = await this.hasher.hash(account.password);
    const result = await this.accountRepository.add({ ...account, password: hashedPassword });

    return result;
  }
}
