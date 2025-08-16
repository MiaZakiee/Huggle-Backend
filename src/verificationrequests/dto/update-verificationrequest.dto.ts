import { PartialType } from '@nestjs/swagger';
import { CreateVerificationrequestDto } from './create-verificationrequest.dto';

export class UpdateVerificationrequestDto extends PartialType(
  CreateVerificationrequestDto,
) {}
