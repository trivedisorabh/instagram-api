import { AccountModel } from '@/domain';

export interface AccountRepository {
  add(params: AccountRepository.AddParams): Promise<boolean>;
  auth(params: AccountRepository.AuthParams): Promise<AccountRepository.AuthResult>;
  loadByEmail(email: AccountRepository.LoadByEmailParams): Promise<AccountModel>;
}

export namespace AccountRepository {
  export type AddParams = Omit<AccountModel, 'id'>;

  export type AuthParams = Pick<AccountModel, 'email' | 'password'>;
  export type AuthResult = Pick<AccountModel, 'accessToken'>;

  export type LoadByEmailParams = Pick<AccountModel, 'email'>;
}
