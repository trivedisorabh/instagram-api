import { Authentication } from '@/domain';
import { AccountRepository, HashComparer } from '@/data';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly hashComparer: HashComparer,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.accountRepository.loadByEmail({
      email: params.email,
    });

    const isValid = await this.hashComparer.compare(account.password, params.password);

    console.log({ isValid });

    return null;
  }
}
