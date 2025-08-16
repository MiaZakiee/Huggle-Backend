import { Module } from '@nestjs/common';
import { VerificationrequestsService } from './verificationrequests.service';
import { VerificationrequestsController } from './verificationrequests.controller';

@Module({
  controllers: [VerificationrequestsController],
  providers: [VerificationrequestsService],
})
export class VerificationrequestsModule {}
