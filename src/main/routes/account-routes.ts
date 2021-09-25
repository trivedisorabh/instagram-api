import { adaptRoute, makeAddAccountController } from '@/main';

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/add-account', adaptRoute(makeAddAccountController()));
};
