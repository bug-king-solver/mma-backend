import { Module } from '@nestjs/common';
import { FightController } from './controller/fight.controller';
import { FightService } from './service/fight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fight } from './entities/fight.entity';
import { Fighter } from '../fighter/entities/fighter.entity';
import { RankingModule } from '../ranking/ranking.module';

@Module({
  imports: [TypeOrmModule.forFeature([Fight, Fighter]), RankingModule],
  controllers: [FightController],
  providers: [FightService],
})
export class FightModule {}
