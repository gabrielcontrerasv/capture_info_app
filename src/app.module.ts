import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CaptureDataModule } from './captureData/capture-data.module';

@Module({
  imports: [CaptureDataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
