import { AccountModel } from '@/domain';

export interface UpdateAccessTokenRepository {
  updateAccessToken(accessToken: UpdateAccessTokenRepository.UpdateParams): Promise<void>;
}

export namespace UpdateAccessTokenRepository {
  export type UpdateParams = Pick<AccountModel, 'id' | 'accessToken'>;
}
