import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { EventService } from '../service/event.service';
import { Event } from '../entities/event.entity';

@Controller('event')
export class EventController {
    constructor(private readonly eventService: EventService) {}

    //get event by id
    @Get(':id')
    async findOne(@Param('id') id: number): Promise<Event> {
        const event = await this.eventService.findOne(id);
        if (!event) {
            throw new NotFoundException('Event does not exist!');
        } else {
            return event;
        }
    }

    //create event
    @Post()
    async create(@Body() event: Event): Promise<Event> {
        return this.eventService.create(event);
    }

    //update event
    @Put(':id')
    async update(@Param('id') id: number, @Body() event: Event): Promise<any> {
        return this.eventService.update(id, event);
    }

    //delete event
    @Delete('id')
    async delete(@Param('id') id: number): Promise<any> {
        //handle error if event doesn't exist
        const event = await this.eventService.findOne(id);
        if (!event) {
            throw new NotFoundException('Event does not exist!');
        }
        return this.eventService.delete(id);
    }

    @Get('upcoming')
    async getUpcommingEvent() {
        const upcomingEvents = await this.eventService.getUpcomingEvents();
        return upcomingEvents;
    }
}
