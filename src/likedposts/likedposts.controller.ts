import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { LikedpostsService } from './likedposts.service';
import { CreateLikedpostDto } from './dto/create-likedpost.dto';
import { UpdateLikedpostDto } from './dto/update-likedpost.dto';

@Controller('likedposts')
export class LikedpostsController {
  constructor(private readonly likedpostsService: LikedpostsService) {}

  @Post()
  create(@Body() createLikedpostDto: CreateLikedpostDto) {
    return this.likedpostsService.create(createLikedpostDto);
  }

  @Get()
  findAll() {
    return this.likedpostsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.likedpostsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateLikedpostDto: UpdateLikedpostDto,
  ) {
    return this.likedpostsService.update(+id, updateLikedpostDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likedpostsService.remove(+id);
  }
}
