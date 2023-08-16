import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fight } from '../entities/fight.entity';
import { RankingService } from 'src/ranking/service/ranking.service';
import { Fighter } from 'src/fighter/entities/fighter.entity';

@Injectable()
export class FightService {
    constructor(
        @InjectRepository(Fight)
        @InjectRepository(Fighter)
        private fightRepository: Repository<Fight>,
        private fighterRepository: Repository<Fighter>,
        private rankingService: RankingService,
    ){}

    async findOne(id: number): Promise<Fight> {
        return this.fightRepository.findOne({where: {id}});
    }

    async create(fight: Partial<Fight>): Promise<Fight> {
        const newFight = this.fightRepository.create(fight);
        return this.fightRepository.save(newFight);
    }

    async update(id: number, fight: Partial<Fight>): Promise<Fight> {
        await this.fightRepository.update(id, fight);
        return this.fightRepository.findOne({where: {id}});
    }

    async delete(id: number): Promise<void> {
        await this.fightRepository.delete(id);
    }

    async processFightResult(fight: Fight): Promise<void> {
        const winner = fight.fighter1;
        const loser = fight.fighter2;

        this.updateFighterStatistics(winner, true);
        this.updateFighterStatistics(loser, false);
        
        await this.rankingService.updateRankings(winner);
        await this.rankingService.updateRankings(loser);
    }

    private updateFighterStatistics(fighter: Fighter, isWinner: boolean): void {
        if (isWinner) {
            fighter.wins ++;
        } else {
            fighter.losses ++;
        }
    }

    async getFighterStatitics(id: number): Promise<any> {
        const fighter = await this.fighterRepository.findOne({where: {id}});

        if (!fighter) {
            throw new NotFoundException(`Fighter with id ${id} not found`);
        }

        const fightStatistics = {
            fighterName: fighter.name,
            wins: fighter.wins,
            losses: fighter.losses,
            knockouts: fighter.knockouts,
            submissions: fighter.submissions,
        }

        return fightStatistics;
    }
}
