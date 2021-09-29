import { DbAddPost } from '@/data';
import { AddPost } from '@/domain';
import { PostMongoRepository } from '@/infra';

export const makeDbAddPost = (): AddPost => {
  const postMongoRepository = new PostMongoRepository();

  return new DbAddPost(postMongoRepository);
};
