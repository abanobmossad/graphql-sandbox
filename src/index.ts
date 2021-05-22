import 'reflect-metadata'; // We need this in order to use @Decorators
import config from './config';
import { Logger } from './common/logger';
import { app } from './app';

function bootstrap() {
  app
    .listen(config.port, () => {
      Logger.info(
        `🚀 Server listening on: http://${config.host}:${config.port}`,
      );
    })
    .on('error', (err) => {
      Logger.error(err);
      process.exit(1);
    });
}

bootstrap();
