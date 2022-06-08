import { Injectable, NotFoundException } from '@nestjs/common';
import { TravelScheduleEntity } from 'src/core/entities/travel-schedule.entity';
import { TravelScheduleRepo } from 'src/core/repos/travel-schedule.repo';
import { TravelSchedule, ResultList } from 'src/core/types';
import {
  TravelScheduleDestinationParam,
  TravelScheduleSlugParam,
} from 'src/messages/travel-schedule.message';

@Injectable()
export class TravelScheduleService {
  constructor(private repo: TravelScheduleRepo) {}

  async findAll(): Promise<ResultList<TravelSchedule>> {
    const travelSchedules = await this.repo.findAll();

    return { items: travelSchedules, count: travelSchedules.length };
  }

  async readBySlug(
    props: TravelScheduleSlugParam,
  ): Promise<TravelScheduleEntity> {
    const travelSchedule = await this.repo.findBySlug(props.travelScheduleSlug);

    if (travelSchedule == null) {
      throw new NotFoundException(
        `TravelSchedule ${props.travelScheduleSlug} not found`,
      );
    }

    return travelSchedule;
  }

  async readByDestination(
    props: TravelScheduleDestinationParam,
  ): Promise<ResultList<TravelSchedule>> {
    const travelSchedule = await this.repo.readByDestination(
      props.startDestination,
      props.endDestination,
    );

    if (travelSchedule == null) {
      throw new NotFoundException(
        `TravelSchedule with startDestination: ${props.startDestination} and endDestination: ${props.endDestination}not found`,
      );
    }

    return { items: travelSchedule, count: travelSchedule.length };
  }
}
