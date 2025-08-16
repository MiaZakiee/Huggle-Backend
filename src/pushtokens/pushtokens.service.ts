import { Injectable } from '@nestjs/common';
import { CreatePushtokenDto } from './dto/create-pushtoken.dto';
import { UpdatePushtokenDto } from './dto/update-pushtoken.dto';

@Injectable()
export class PushtokensService {
  create(createPushtokenDto: CreatePushtokenDto) {
    return 'This action adds a new pushtoken';
  }

  findAll() {
    return `This action returns all pushtokens`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pushtoken`;
  }

  update(id: number, updatePushtokenDto: UpdatePushtokenDto) {
    return `This action updates a #${id} pushtoken`;
  }

  remove(id: number) {
    return `This action removes a #${id} pushtoken`;
  }
}
