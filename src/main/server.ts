import { env } from '@/main';
import { MongoHelper } from '@/infra';

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const { setupApp } = await import('./config/app');
    const app = await setupApp();

    app.listen(env.port, () => console.log(`Server running at http://localhost:${env.port}`));
  })
  .catch(console.error);
