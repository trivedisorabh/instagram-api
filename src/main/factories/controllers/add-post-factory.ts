import { makeDbAddPost } from '@/main';
import { AddPostController } from '@/presentation';
import { Controller } from '@/presentation';

import { makeAddPostValidation } from '@/main';

export const makeAddPostController = (): Controller => {
  return new AddPostController(makeAddPostValidation(), makeDbAddPost());
};
