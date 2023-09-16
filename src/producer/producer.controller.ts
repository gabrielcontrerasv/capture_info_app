import { Controller, Post, Body } from '@nestjs/common';
import { ProducerService } from './producer.service';
import { producerDTO } from './DTO/data.dto';

@Controller()
export class ProducerController {
  constructor(private readonly producerService: ProducerService) {}

  @Post('producer')
  async captureData(@Body() body: producerDTO) {
    return await this.producerService.sendData(body.data);
  }
}
