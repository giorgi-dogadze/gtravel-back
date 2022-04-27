import { Controller, Get } from '@nestjs/common';
import { ResultList, TravelSchedule } from 'src/core/types';
import { TravelScheduleService } from 'src/services/travel-schedule.service';

@Controller()
export class TravelScheduleController {
  constructor(private service: TravelScheduleService) {}

  @Get('/travel-schedule')
  async findAll(): Promise<ResultList<TravelSchedule>> {
    const resultList = await this.service.findAll();

    return resultList;
  }
}
