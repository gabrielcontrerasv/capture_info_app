import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { producerDTO } from './DTO/data.dto';

@Injectable()
export class ProducerService {
  constructor(@Inject('PRODUCER_SERVICE') private client: ClientProxy) {}

  async sendData(data: producerDTO): Promise<unknown> {
    try {
      console.log('data', data);
      return await this.client.send({ cmd: 'store' }, data);
    } catch (error) {
      console.error('Error al enviar datos a RabbitMQ:', error);
      throw new Error('No se pudieron enviar los datos a RabbitMQ');
    }
  }
}
