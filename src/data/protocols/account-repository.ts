import { AccountModel } from '@/domain';

export interface AccountRepository {
  add(params: AccountRepository.AddParams): Promise<boolean>;
  loadByEmail(email: AccountRepository.LoadByEmailParams): Promise<AccountModel>;
}

export namespace AccountRepository {
  export type AddParams = Omit<AccountModel, 'id'>;
  export type LoadByEmailParams = Pick<AccountModel, 'email'>;
}
