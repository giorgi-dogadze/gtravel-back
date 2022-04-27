import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NukeService } from './services/nuke.service';

async function bootstrap(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  return app;
}

export async function run(): Promise<void> {
  const app = await bootstrap();

  const nuke = app.get(NukeService);

  await nuke.nuke();

  console.info('done ✅');
}

run();
