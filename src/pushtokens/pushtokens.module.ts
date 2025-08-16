import { Module } from '@nestjs/common';
import { PushtokensService } from './pushtokens.service';
import { PushtokensController } from './pushtokens.controller';

@Module({
  controllers: [PushtokensController],
  providers: [PushtokensService],
})
export class PushtokensModule {}
