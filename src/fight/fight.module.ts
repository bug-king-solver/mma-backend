import { Module } from '@nestjs/common';
import { FightController } from './controller/fight.controller';
import { FightService } from './service/fight.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fight } from './entities/fight.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fight])],
  controllers: [FightController],
  providers: [FightService]
})
export class FightModule {}
