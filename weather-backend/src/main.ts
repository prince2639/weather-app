import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: 'GET,POST',
    credentials: true,
  });
  const config = new DocumentBuilder()
    .setTitle('Weather API')
    .setDescription('The weather API description')
    .setVersion('1.0')
    .addTag('Weather')
    .addBasicAuth(
      {
        type: 'http',
        scheme: 'basic',
        description: 'Enter username and password for authentication',
      },
      'basic-auth', // Name of the auth scheme
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      authAction: {
        'basic-auth': {
          name: 'Basic Auth',
          schema: {
            type: 'http',
            scheme: 'basic',
          },
          value: {
            username: 'admin',
            password: 'Pp@275688',
          },
        },
      },
    },
  });
  // SwaggerModule.setup('api', app, document);

  await app.listen(3001);
}
bootstrap();
