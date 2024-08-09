import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Projeto Final Bloco 02')
  .setDescription('Projeto final do bloco 02 - farmácia')
  .setContact("Generation Brasil","https://github.com/JoshuaSimionato/projeto_final_bloco_02/","joshua.simionato@email.com")
  .setVersion('1.0')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/swagger', app, document);

  process.env.TZ = '-03:00'; // Configurando o fuso-horário

  app.useGlobalPipes(new ValidationPipe()); // Habilataremos o Validation Globalmente

  app.enableCors();  // Habilitamos requisições de outras origens (Servidores)

  await app.listen(4000);
}

bootstrap();
