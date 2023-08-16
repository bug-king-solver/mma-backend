import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { FightService } from 'src/fight/service/fight.service';

@Controller('fighter-fight-statistics')
export class FighterFightStatisticsController {
    constructor(private readonly fightService: FightService) {}

    @Get(':fighterId/fight-satistics')
    async getFightStatisticsForFighter(@Param('fighterId') fighterId: number) {
        const fightStatistics = await this.fightService.getFighterStatitics(fighterId);

        if(!fightStatistics) {
            throw new NotFoundException(`Fight statistics for fighter with id ${fighterId} not found`);
        }

        return fightStatistics;
    }
}
