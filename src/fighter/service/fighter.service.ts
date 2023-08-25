import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fighter } from '../entities/fighter.entity';

@Injectable()
export class FighterService {
    constructor(
        @InjectRepository(Fighter)
        private fighterRepository: Repository<Fighter>, 
    ){}

    async findAll(): Promise<Fighter[]> {
        return this.fighterRepository.find();
    }

    async findOne(id: number): Promise<Fighter> {
        return this.fighterRepository.findOne({where: {id}});
    }

    async create(fighter: Partial<Fighter>): Promise<Fighter> {
        const newFighter = this.fighterRepository.create(fighter);
        return this.fighterRepository.save(newFighter);
    }

    async update(id: number, fighter: Partial<Fighter>): Promise<Fighter> {
        await this.fighterRepository.update(id, fighter);
        return this.fighterRepository.findOne({where: {id}});
    }

    async delete(id: number): Promise<void> {
        await this.fighterRepository.delete(id);
    }
}
