import { Module } from '@nestjs/common';
import { EventController } from './controller/event/event.controller';
import { EventService } from './service/event/event.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Event } from './entities/event.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Event])],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
