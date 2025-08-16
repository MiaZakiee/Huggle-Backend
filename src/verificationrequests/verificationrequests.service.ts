import { Injectable } from '@nestjs/common';
import { CreateVerificationrequestDto } from './dto/create-verificationrequest.dto';
import { UpdateVerificationrequestDto } from './dto/update-verificationrequest.dto';

@Injectable()
export class VerificationrequestsService {
  create(createVerificationrequestDto: CreateVerificationrequestDto) {
    return 'This action adds a new verificationrequest';
  }

  findAll() {
    return `This action returns all verificationrequests`;
  }

  findOne(id: number) {
    return `This action returns a #${id} verificationrequest`;
  }

  update(
    id: number,
    updateVerificationrequestDto: UpdateVerificationrequestDto,
  ) {
    return `This action updates a #${id} verificationrequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} verificationrequest`;
  }
}
