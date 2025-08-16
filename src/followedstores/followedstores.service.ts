import { Injectable } from '@nestjs/common';
import { CreateFollowedstoreDto } from './dto/create-followedstore.dto';
import { UpdateFollowedstoreDto } from './dto/update-followedstore.dto';

@Injectable()
export class FollowedstoresService {
  create(createFollowedstoreDto: CreateFollowedstoreDto) {
    return 'This action adds a new followedstore';
  }

  findAll() {
    return `This action returns all followedstores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} followedstore`;
  }

  update(id: number, updateFollowedstoreDto: UpdateFollowedstoreDto) {
    return `This action updates a #${id} followedstore`;
  }

  remove(id: number) {
    return `This action removes a #${id} followedstore`;
  }
}
