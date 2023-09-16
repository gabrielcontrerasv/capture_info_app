import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.register([
      {
        name: 'store',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'storedata',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [ProducerController],
  providers: [ProducerService],
})
export class ProducerModule {}
