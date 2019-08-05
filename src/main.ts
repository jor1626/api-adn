import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  var app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
    .setTitle('New ADN')
    .setDescription('New ADN API')
    .setVersion('1.0')
    .addTag('estado-resultado')
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('swagger', app, document);

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
