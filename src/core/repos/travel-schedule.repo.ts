import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TravelScheduleEntity } from '../entities/travel-schedule.entity';

@Injectable()
export class TravelScheduleRepo {
  constructor(
    @InjectRepository(TravelScheduleEntity)
    private repo: Repository<TravelScheduleEntity>,
  ) {}

  public async findAll(): Promise<TravelScheduleEntity[]> {
    return this.repo.find();
  }

  public async save(
    travelSchedule: TravelScheduleEntity,
  ): Promise<TravelScheduleEntity> {
    await this.repo.save(travelSchedule);
    return travelSchedule;
  }

  public async findBySlug(
    slug: string,
  ): Promise<TravelScheduleEntity | undefined> {
    return this.repo.findOne({
      where: { slug },
    });
  }

  public async readByDestination(
    startDestination: string,
    endDestination: string,
  ): Promise<TravelScheduleEntity[] | undefined> {
    return this.repo.find({
      where: { startDestination, endDestination },
    });
  }
}
