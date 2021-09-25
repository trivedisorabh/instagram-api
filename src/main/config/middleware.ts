import { Express } from 'express';

import { bodyParser, cors, contentType, noCache } from '@/main';

export const setupMiddlewares = (app: Express): void => {
  app.use(contentType);
  app.use(bodyParser);
  app.use(cors);
  app.use(noCache);
};
