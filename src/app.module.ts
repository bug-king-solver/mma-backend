import { Module } from '@nestjs/common';
import { FighterModule } from './fighter/fighter.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightModule } from './fight/fight.module';
import { EventModule } from './event/event.module';
import { RankingModule } from './ranking/ranking.module';
import { dataSourceOptions } from 'db/data-source';
import { FighterFightStatisticsController } from './fighter-fight-statistics/controller/fighter-fight-statistics.controller';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(dataSourceOptions),
    FighterModule,
    FightModule,
    RankingModule,
    EventModule
  ],
  controllers: [FighterFightStatisticsController],
  providers: [],
})
export class AppModule {}
