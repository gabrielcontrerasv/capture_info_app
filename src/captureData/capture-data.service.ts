import { Injectable } from '@nestjs/common';

@Injectable()
export class CaptureDataService {
  async captureData(data: string) {
    console.log(data);
  }
}
