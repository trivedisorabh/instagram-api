import { PostModel } from '@/domain';

export interface AddPost {
  add(params: AddPost.AddPostParams): Promise<boolean>;
}

export namespace AddPost {
  export type AddPostParams = Omit<PostModel, 'id' & 'createdAt'>;
}
