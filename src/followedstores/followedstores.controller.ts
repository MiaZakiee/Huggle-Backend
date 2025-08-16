import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { FollowedstoresService } from './followedstores.service';
import { CreateFollowedstoreDto } from './dto/create-followedstore.dto';
import { UpdateFollowedstoreDto } from './dto/update-followedstore.dto';

@Controller('followedstores')
export class FollowedstoresController {
  constructor(private readonly followedstoresService: FollowedstoresService) {}

  @Post()
  create(@Body() createFollowedstoreDto: CreateFollowedstoreDto) {
    return this.followedstoresService.create(createFollowedstoreDto);
  }

  @Get()
  findAll() {
    return this.followedstoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.followedstoresService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateFollowedstoreDto: UpdateFollowedstoreDto,
  ) {
    return this.followedstoresService.update(+id, updateFollowedstoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.followedstoresService.remove(+id);
  }
}
