import { Test, TestingModule } from '@nestjs/testing';
import { CaptureDataController } from './capture-data.controller';

describe('CaptureDataController', () => {
  let controller: CaptureDataController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CaptureDataController],
    }).compile();

    controller = module.get<CaptureDataController>(CaptureDataController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
