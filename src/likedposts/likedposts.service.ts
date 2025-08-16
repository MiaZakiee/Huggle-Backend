import { Injectable } from '@nestjs/common';
import { CreateLikedpostDto } from './dto/create-likedpost.dto';
import { UpdateLikedpostDto } from './dto/update-likedpost.dto';

@Injectable()
export class LikedpostsService {
  create(createLikedpostDto: CreateLikedpostDto) {
    return 'This action adds a new likedpost';
  }

  findAll() {
    return `This action returns all likedposts`;
  }

  findOne(id: number) {
    return `This action returns a #${id} likedpost`;
  }

  update(id: number, updateLikedpostDto: UpdateLikedpostDto) {
    return `This action updates a #${id} likedpost`;
  }

  remove(id: number) {
    return `This action removes a #${id} likedpost`;
  }
}
