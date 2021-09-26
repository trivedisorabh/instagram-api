import { AccountModel } from '@/domain';

export interface AddAccountRepository {
  add(params: AddAccountRepository.AddParams): Promise<boolean>;
}

export namespace AddAccountRepository {
  export type AddParams = Omit<AccountModel, 'id'>;
}
