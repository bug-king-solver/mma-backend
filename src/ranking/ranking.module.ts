import { Module } from '@nestjs/common';
import { RankingController } from './controller/ranking/ranking.controller';
import { RankingService } from './service/ranking/ranking.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Ranking } from './entities/ranking.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Ranking])],
  controllers: [RankingController],
  providers: [RankingService]
})
export class RankingModule {}
