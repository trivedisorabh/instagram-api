import { AccountModel } from '@/domain';

export interface LoadByEmailRepository {
  loadByEmail(email: LoadByEmailRepository.LoadByEmailParams): Promise<AccountModel>;
}

export namespace LoadByEmailRepository {
  export type LoadByEmailParams = Pick<AccountModel, 'email'>;
}
