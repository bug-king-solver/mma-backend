import {  Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MoreThan, Repository } from 'typeorm';
import { Event } from '../entities/event.entity';

@Injectable()
export class EventService {
    constructor(
        @InjectRepository(Event)
        private eventRepository: Repository<Event>,
    ){}

    async findOne(id: number): Promise<Event> {
        return this.eventRepository.findOne({where: {id}});
    }

    async create(event: Partial<Event>): Promise<Event> {
        const newEvent = this.eventRepository.create(event);
        return this.eventRepository.save(newEvent);
    }

    async update(id: number, event: Partial<Event>): Promise<Event> {
        await this.eventRepository.update(id, event);
        return this.eventRepository.findOne({where: {id}});
    }

    async delete(id: number): Promise<void> {
        await this.eventRepository.delete(id);
    }

    async getUpcomingEvents(): Promise<Event[]> {
        const currentDate = new Date();
        return this.eventRepository.find({
            where: {
                date: MoreThan(currentDate),
            }
        })
    }
}
