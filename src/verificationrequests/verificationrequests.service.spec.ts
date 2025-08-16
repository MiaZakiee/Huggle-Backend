import { Test, TestingModule } from '@nestjs/testing';
import { VerificationrequestsService } from './verificationrequests.service';

describe('VerificationrequestsService', () => {
  let service: VerificationrequestsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [VerificationrequestsService],
    }).compile();

    service = module.get<VerificationrequestsService>(
      VerificationrequestsService,
    );
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
