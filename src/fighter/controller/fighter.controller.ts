import { Controller, Get, Post, Body, Put, Param, Delete, NotFoundException } from '@nestjs/common';
import { FighterService } from '../service/fighter.service';
import { Fighter } from '../entities/fighter.entity';

@Controller('fighter')
export class FighterController {
    constructor(private readonly fighterService: FighterService) {}

    //get all fighters
    @Get()
    async findAll(): Promise<Fighter[]> {
      return this.fighterService.findAll();
    }

    //get fighter by id
    @Get(':id')
    async findOne(@Param('id') id:number): Promise<Fighter> {
        const fighter = await this.fighterService.findOne(id);
        if (!fighter) {
            throw new NotFoundException('Fighter does not exist!');
        } else {
            return fighter;
        }
    }

    //create fighter
    @Post()
    async create(@Body() fighter: Fighter): Promise<Fighter> {
        return this.fighterService.create(fighter);
    }

    //update fighter
    @Put(':id')
    async update(@Param('id') id:number, @Body() fighter: Fighter): Promise<any> {
        return this.fighterService.update(id, fighter);
    }

    //delete fighter
    @Delete(':id')
    async Delete(@Param('id') id:number): Promise<any> {
        //handle error if fighter does not exist
        const fighter = await this.fighterService.findOne(id);
        if (!fighter) {
            throw new NotFoundException('Fighter does not exist!');
        }
        return this.fighterService.delete(id);
    }
}
