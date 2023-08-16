import { Module } from '@nestjs/common';
import { FighterModule } from './fighter/fighter.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FightModule } from './fight/fight.module';
import { EventModule } from './event/event.module';
import { RankingModule } from './ranking/ranking.module';
import { dataSourceOptions } from 'db/data-source';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    TypeOrmModule.forRoot(dataSourceOptions),
    FighterModule,
    EventModule,
    RankingModule,
    FightModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
