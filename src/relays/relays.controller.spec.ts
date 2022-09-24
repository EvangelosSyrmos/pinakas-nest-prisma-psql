import { Test, TestingModule } from '@nestjs/testing';
import { RelaysController } from './relays.controller';
import { RelaysService } from './relays.service';

describe('RelaysController', () => {
  let controller: RelaysController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RelaysController],
      providers: [RelaysService],
    }).compile();

    controller = module.get<RelaysController>(RelaysController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
