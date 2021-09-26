import { AccountModel } from '@/domain';

export interface Authentication {
  auth(account: Authentication.Params): Promise<Authentication.Result>;
}

export namespace Authentication {
  export type Params = Pick<AccountModel, 'email' | 'password'>;

  export type Result = {
    accessToken: string;
  };
}
