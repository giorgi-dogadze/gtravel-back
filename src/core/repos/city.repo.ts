import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CityEntity } from '../entities/city.entity';

@Injectable()
export class CityRepo {
  constructor(
    @InjectRepository(CityEntity)
    private repo: Repository<CityEntity>,
  ) {}

  public async findAll(): Promise<CityEntity[]> {
    return this.repo.find();
  }

  public async save(city: CityEntity): Promise<CityEntity> {
    await this.repo.save(city);
    return city;
  }
}
