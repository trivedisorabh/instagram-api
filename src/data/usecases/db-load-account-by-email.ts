import { LoadAccountByEmail, AccountModel } from '@/domain';
import { AccountRepository } from '@/data';

export class DbLoadAccountByEmail implements LoadAccountByEmail {
  constructor(private readonly accountRepository: AccountRepository) {}

  async load(email: LoadAccountByEmail.LoadAccountByEmailParams): Promise<AccountModel> {
    const result = await this.accountRepository.loadByEmail(email);
    return result;
  }
}
