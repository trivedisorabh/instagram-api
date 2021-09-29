import { adaptRoute, makeAddPostController } from '@/main';

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/add-post', adaptRoute(makeAddPostController()));
};
