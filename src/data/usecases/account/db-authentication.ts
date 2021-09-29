import { Authentication } from '@/domain';
import {
  LoadByEmailRepository,
  HashComparer,
  Encrypter,
  UpdateAccessTokenRepository,
} from '@/data';

export class DbAuthentication implements Authentication {
  constructor(
    private readonly loadByEmail: LoadByEmailRepository,
    private readonly hashComparer: HashComparer,
    private readonly encrypt: Encrypter,
    private readonly updateAccessToken: UpdateAccessTokenRepository,
  ) {}

  async auth(params: Authentication.Params): Promise<Authentication.Result> {
    const account = await this.loadByEmail.loadByEmail({
      email: params.email,
    });

    if (!account) {
      return null;
    }

    const isValid = await this.hashComparer.compare(params.password, account.password);

    if (isValid) {
      const accessToken = await this.encrypt.encrypt(account.id);

      await this.updateAccessToken.updateAccessToken({ id: account.id, accessToken });

      return {
        accessToken,
      };
    }

    return null;
  }
}
