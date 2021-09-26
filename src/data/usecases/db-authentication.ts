import { Authentication } from '@/domain';
import { AccountRepository, HashComparer, Encrypter } from '@/data';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly accountRepository: AccountRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypt: Encrypter,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.accountRepository.loadByEmail({
      email: params.email,
    });

    const isValid = await this.hashComparer.compare(params.password, account.password);

    if (isValid) {
      const accessToken = await this.encrypt.encrypt(params.password);

      return {
        accessToken,
      };
    }

    return null;
  }
}
