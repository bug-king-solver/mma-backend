import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Ranking } from '../entities/ranking.entity';
import { Fighter } from '../../fighter/entities/fighter.entity';

@Injectable()
export class RankingService {
    constructor(
        @InjectRepository(Ranking)
        private rankingRepository: Repository<Ranking>
    ){}

    async updateRankings(fighter: Fighter): Promise<void> {
        const updateRanking = await this.calculateAndUpdateRanking(fighter);
        
        await this.rankingRepository.save(updateRanking);
    }

    private async calculateAndUpdateRanking(fighter: Fighter): Promise<Ranking> {
        const fighterWinPercentage = fighter.wins / (fighter.wins + fighter.losses)

        const currentRanking = await this.rankingRepository.findOne({
            where: {fighter: fighter},
        });

        const newPosition = Math.round(fighterWinPercentage * 100);

        currentRanking.rank = newPosition;

        return currentRanking;
    }

    async getRankingByFighterId(fighterId: number): Promise<Ranking> {
        const ranking = await this.rankingRepository.findOne({
            where: { fighter: {id: fighterId}},
        });
        return ranking;
    }
}
