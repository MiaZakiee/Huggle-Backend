import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { VerificationrequestsService } from './verificationrequests.service';
import { CreateVerificationrequestDto } from './dto/create-verificationrequest.dto';
import { UpdateVerificationrequestDto } from './dto/update-verificationrequest.dto';

@Controller('verificationrequests')
export class VerificationrequestsController {
  constructor(
    private readonly verificationrequestsService: VerificationrequestsService,
  ) {}

  @Post()
  create(@Body() createVerificationrequestDto: CreateVerificationrequestDto) {
    return this.verificationrequestsService.create(
      createVerificationrequestDto,
    );
  }

  @Get()
  findAll() {
    return this.verificationrequestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.verificationrequestsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateVerificationrequestDto: UpdateVerificationrequestDto,
  ) {
    return this.verificationrequestsService.update(
      +id,
      updateVerificationrequestDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.verificationrequestsService.remove(+id);
  }
}
