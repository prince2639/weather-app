// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3001', // Frontend URL
    methods: 'GET,POST',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Weather API')
    .setDescription('The weather API description')
    .setVersion('1.0')
    .addTag('Weather')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
