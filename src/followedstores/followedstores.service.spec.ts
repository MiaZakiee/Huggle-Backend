import { Test, TestingModule } from '@nestjs/testing';
import { FollowedstoresService } from './followedstores.service';

describe('FollowedstoresService', () => {
  let service: FollowedstoresService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FollowedstoresService],
    }).compile();

    service = module.get<FollowedstoresService>(FollowedstoresService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
