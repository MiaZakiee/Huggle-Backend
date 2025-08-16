import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PushtokensService } from './pushtokens.service';
import { CreatePushtokenDto } from './dto/create-pushtoken.dto';
import { UpdatePushtokenDto } from './dto/update-pushtoken.dto';

@Controller('pushtokens')
export class PushtokensController {
  constructor(private readonly pushtokensService: PushtokensService) {}

  @Post()
  create(@Body() createPushtokenDto: CreatePushtokenDto) {
    return this.pushtokensService.create(createPushtokenDto);
  }

  @Get()
  findAll() {
    return this.pushtokensService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pushtokensService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePushtokenDto: UpdatePushtokenDto,
  ) {
    return this.pushtokensService.update(+id, updatePushtokenDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pushtokensService.remove(+id);
  }
}
