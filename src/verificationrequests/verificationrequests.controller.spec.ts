import { Test, TestingModule } from '@nestjs/testing';
import { VerificationrequestsController } from './verificationrequests.controller';
import { VerificationrequestsService } from './verificationrequests.service';

describe('VerificationrequestsController', () => {
  let controller: VerificationrequestsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VerificationrequestsController],
      providers: [VerificationrequestsService],
    }).compile();

    controller = module.get<VerificationrequestsController>(
      VerificationrequestsController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
