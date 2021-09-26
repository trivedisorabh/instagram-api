import { AccountModel } from '@/domain';

export interface LoadAccountByEmail {
  load(params: LoadAccountByEmail.LoadAccountByEmailParams): Promise<AccountModel>;
}

export namespace LoadAccountByEmail {
  export type LoadAccountByEmailParams = {
    email: string;
  };
}
