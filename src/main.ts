import { NestFactory } from '@nestjs/core';
import { AppModule } from 'src/app.module';

export async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');
  await app.listen(8080);
}
bootstrap();
