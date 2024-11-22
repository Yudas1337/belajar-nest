import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ROUTES } from './shared/routes/router';
import { ValidationPipe } from '@nestjs/common';
import { ValidationInterceptor } from "./common/interceptors/validation.interceptor";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix(ROUTES.API_PREFIX);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
