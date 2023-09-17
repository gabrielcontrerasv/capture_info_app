import { Module } from '@nestjs/common';
import { ProducerController } from './producer.controller';
import { ProducerService } from './producer.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PRODUCER_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://rabbit-nest:5672'],
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
