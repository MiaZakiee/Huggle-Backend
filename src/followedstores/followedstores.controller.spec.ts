import { Test, TestingModule } from '@nestjs/testing';
import { FollowedstoresController } from './followedstores.controller';
import { FollowedstoresService } from './followedstores.service';

describe('FollowedstoresController', () => {
  let controller: FollowedstoresController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FollowedstoresController],
      providers: [FollowedstoresService],
    }).compile();

    controller = module.get<FollowedstoresController>(FollowedstoresController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
