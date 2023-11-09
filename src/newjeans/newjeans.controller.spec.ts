import { Test, TestingModule } from '@nestjs/testing';
import { NewjeansController } from './newjeans.controller';
import { NewjeansService } from './newjeans.service';

describe('NewjeansController', () => {
  let controller: NewjeansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [NewjeansController],
      providers: [NewjeansService],
    }).compile();

    controller = module.get<NewjeansController>(NewjeansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
