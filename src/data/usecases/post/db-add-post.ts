import { AddPost } from '@/domain';
import { AddPostRepository } from '@/data';

export class DbAddPost implements AddPost {
  constructor(private readonly addPost: AddPostRepository) {}

  async add(params: AddPost.AddPostParams): Promise<boolean> {
    const result = await this.addPost.add(params);

    return result;
  }
}
