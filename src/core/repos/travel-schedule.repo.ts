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
}
