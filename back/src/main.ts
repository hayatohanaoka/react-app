import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/diary.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
