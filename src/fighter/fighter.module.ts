import { Module } from '@nestjs/common';
import { FighterController } from './controller/fighter.controller';
import { FighterService } from './service/fighter.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Fighter } from './entities/fighter.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Fighter])],
    controllers: [FighterController],
    providers: [FighterService]
})
export class FighterModule {}
