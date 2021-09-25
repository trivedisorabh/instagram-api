import { setupRoutes, setupMiddlewares } from '@/main';

import express, { Express } from 'express';

export const setupApp = async (): Promise<Express> => {
  const app = express();

  setupMiddlewares(app);
  setupRoutes(app);

  return app;
};
