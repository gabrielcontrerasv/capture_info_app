import { Controller, Post, Body } from '@nestjs/common';
import { CaptureDataService } from './capture-data.service';

@Controller('capture-data')
export class CaptureDataController {
  constructor(private readonly capturadorService: CaptureDataService) {}

  @Post()
  async captureData(@Body('toSaveInMongo') data: string) {
    await this.capturadorService.captureData(data);
  }
}
