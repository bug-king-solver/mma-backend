import { Controller, Get, Param } from '@nestjs/common';
import { RankingService } from '../service/ranking.service';
import { Ranking } from '../entities/ranking.entity';

@Controller('ranking')
export class RankingController {
    constructor(private readonly rankingService: RankingService) {}

    @Get(':fighterId')
    async getRanking(@Param('fighterId') fighterId: number): Promise<Ranking> {
        const ranking = await this.rankingService.getRankingByFighterId(fighterId);
        return ranking;
    }
}
