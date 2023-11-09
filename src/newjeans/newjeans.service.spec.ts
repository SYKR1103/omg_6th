import { Test, TestingModule } from '@nestjs/testing';
import { NewjeansService } from './newjeans.service';

describe('NewjeansService', () => {
  let service: NewjeansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NewjeansService],
    }).compile();

    service = module.get<NewjeansService>(NewjeansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
