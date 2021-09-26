import { adaptRoute, makeAddAccountController, makeAuthenticationController } from '@/main';

import { Router } from 'express';

export default (router: Router): void => {
  router.post('/add-account', adaptRoute(makeAddAccountController()));
  router.post('/authentication', adaptRoute(makeAuthenticationController()));
};
