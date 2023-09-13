import { Test, TestingModule } from '@nestjs/testing';
import { CaptureDataService } from './capture-data.service';

describe('CaptureDataService', () => {
  let service: CaptureDataService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CaptureDataService],
    }).compile();

    service = module.get<CaptureDataService>(CaptureDataService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
