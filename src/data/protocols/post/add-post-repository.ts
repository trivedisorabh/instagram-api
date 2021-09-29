import { PostModel } from '@/domain';

export interface AddPostRepository {
  add(params: AddPostRepository.AddParams): Promise<boolean>;
}

export namespace AddPostRepository {
  export type AddParams = Omit<PostModel, 'id' & 'createdAt'>;
}
