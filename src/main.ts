import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const document = SwaggerModule.createDocument(app, new DocumentBuilder()
      .setTitle('MMA API')
      .setDescription('MMA-HomeTask-API')
      .setVersion('1.0')
      .build());
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
