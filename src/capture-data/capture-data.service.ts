import { Injectable } from '@nestjs/common';

@Injectable()
export class CaptureDataService {
  async captureData(toSaveInMongo: string) {
    console.log(toSaveInMongo);
  }
}
