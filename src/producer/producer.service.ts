import { Injectable, Inject } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ProducerService {
  constructor(@Inject('store') private client: ClientProxy) {}
  async sendData(data: string): Promise<unknown> {
    try {
      return this.client.send({ cmd: 'storedata' }, data);
    } catch (error) {
      console.error('Error al enviar datos a RabbitMQ:', error);
      throw new Error('No se pudieron enviar los datos a RabbitMQ');
    }
  }
}
