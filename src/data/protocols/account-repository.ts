import { AccountModel } from 'domain';

export interface AccountRepository {
  add(params: AccountRepository.AddParams): Promise<AccountModel>;
}

export namespace AccountRepository {
  export type AddParams = Omit<AccountModel, 'id'>;
}
