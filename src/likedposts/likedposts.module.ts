import { Module } from '@nestjs/common';
import { LikedpostsService } from './likedposts.service';
import { LikedpostsController } from './likedposts.controller';

@Module({
  controllers: [LikedpostsController],
  providers: [LikedpostsService],
})
export class LikedpostsModule {}
