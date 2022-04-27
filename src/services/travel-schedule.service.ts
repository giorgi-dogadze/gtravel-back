import { Injectable } from '@nestjs/common';
import { TravelScheduleRepo } from 'src/core/repos/travel-schedule.repo';
import { TravelSchedule, ResultList } from 'src/core/types';

@Injectable()
export class TravelScheduleService {
  constructor(private repo: TravelScheduleRepo) {}

  async findAll(): Promise<ResultList<TravelSchedule>> {
    const travelSchedules = await this.repo.findAll();

    return { items: travelSchedules, count: travelSchedules.length };
  }
}
