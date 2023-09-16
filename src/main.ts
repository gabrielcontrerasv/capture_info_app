import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ProducerModule } from './producer/producer.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const rabbit = await NestFactory.createMicroservice<MicroserviceOptions>(
    ProducerModule,
    {
      transport: Transport.RMQ,
      options: {
        urls: ['amqp://localhost:5672'],
        queue: 'storedata',
        queueOptions: {
          durable: false,
        },
      },
    },
  );
  rabbit.useGlobalPipes(new ValidationPipe());
  await rabbit.listen();

  /*const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(5000);
*/
}
bootstrap();
