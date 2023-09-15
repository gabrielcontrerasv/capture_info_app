import { Module } from '@nestjs/common';
import { CaptureDataController } from './capture-data.controller';
import { CaptureDataService } from './capture-data.service';

@Module({
  controllers: [CaptureDataController],
  providers: [CaptureDataService]
})
export class CaptureDataModule {}
