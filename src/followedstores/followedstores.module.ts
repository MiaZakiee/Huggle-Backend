import { Module } from '@nestjs/common';
import { FollowedstoresService } from './followedstores.service';
import { FollowedstoresController } from './followedstores.controller';

@Module({
  controllers: [FollowedstoresController],
  providers: [FollowedstoresService],
})
export class FollowedstoresModule {}
