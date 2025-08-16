import { Test, TestingModule } from '@nestjs/testing';
import { LikedpostsService } from './likedposts.service';

describe('LikedpostsService', () => {
  let service: LikedpostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LikedpostsService],
    }).compile();

    service = module.get<LikedpostsService>(LikedpostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
