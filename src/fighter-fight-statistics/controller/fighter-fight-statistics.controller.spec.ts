import { Test, TestingModule } from '@nestjs/testing';
import { FighterFightStatisticsController } from './fighter-fight-statistics.controller';

describe('FighterFightStatisticsController', () => {
  let controller: FighterFightStatisticsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FighterFightStatisticsController],
    }).compile();

    controller = module.get<FighterFightStatisticsController>(FighterFightStatisticsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
