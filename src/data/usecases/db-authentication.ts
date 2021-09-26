import { Authentication } from '@/domain';
import { LoadByEmailRepository, HashComparer, Encrypter } from '@/data';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadByEmail: LoadByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypt: Encrypter,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.loadByEmail.loadByEmail({
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
