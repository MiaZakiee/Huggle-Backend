import { Test, TestingModule } from '@nestjs/testing';
import { LikedpostsController } from './likedposts.controller';
import { LikedpostsService } from './likedposts.service';

describe('LikedpostsController', () => {
  let controller: LikedpostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LikedpostsController],
      providers: [LikedpostsService],
    }).compile();

    controller = module.get<LikedpostsController>(LikedpostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
