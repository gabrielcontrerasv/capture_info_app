import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): Promise<string> {
    try {
      return this.appService.getAndRenderInfo();
    } catch (e) {
      console.log('error con extrayendo datos del servicio externo');
    }
  }
}
