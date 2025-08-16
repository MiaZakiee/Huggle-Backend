import { Test, TestingModule } from '@nestjs/testing';
import { PushtokensController } from './pushtokens.controller';
import { PushtokensService } from './pushtokens.service';

describe('PushtokensController', () => {
  let controller: PushtokensController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PushtokensController],
      providers: [PushtokensService],
    }).compile();

    controller = module.get<PushtokensController>(PushtokensController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
