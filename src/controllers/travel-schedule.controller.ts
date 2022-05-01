import { Controller, Get, Param } from '@nestjs/common';
import { TravelScheduleEntity } from 'src/core/entities/travel-schedule.entity';
import { ResultList, TravelSchedule } from 'src/core/types';
import { TravelScheduleSlugParam } from 'src/messages/travel-schedule.message';
import { TravelScheduleService } from 'src/services/travel-schedule.service';

@Controller()
export class TravelScheduleController {
  constructor(private service: TravelScheduleService) {}

  @Get('/travel-schedules')
  async findAll(): Promise<ResultList<TravelSchedule>> {
    const resultList = await this.service.findAll();

    return resultList;
  }

  @Get('/travel-schedules/:travelScheduleSlug')
  async readBySlug(
    @Param() param: TravelScheduleSlugParam,
  ): Promise<TravelScheduleEntity> {
    const travelSchedule = await this.service.readBySlug(param);

    return travelSchedule;
  }
}
