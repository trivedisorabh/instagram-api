import { AddAccount } from '@/domain';
import { AddAccountRepository, Hasher, LoadByEmailRepository } from '@/data';

export class DbAddAccount implements AddAccount {
  constructor(
    private readonly loadByEmail: LoadByEmailRepository,
    private readonly addAccount: AddAccountRepository,
    private readonly hasher: Hasher,
  ) {}

  async add(account: AddAccount.AddAccountParams): Promise<boolean> {
    const hasAccount = await this.loadByEmail.loadByEmail({ email: account.email });

    if (hasAccount) {
      return false;
    }

    const hashedPassword = await this.hasher.hash(account.password);
    const result = await this.addAccount.add({ ...account, password: hashedPassword });

    return result;
  }
}
