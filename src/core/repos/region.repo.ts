import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegionEntity } from '../entities/region.entity';

const relations = ['cities', 'dishes', 'regionCenter'];

@Injectable()
export class RegionRepo {
  constructor(
    @InjectRepository(RegionEntity)
    private repo: Repository<RegionEntity>,
  ) {}

  public async findAll(): Promise<RegionEntity[]> {
    return this.repo.find({ relations });
  }

  public async save(region: RegionEntity): Promise<RegionEntity> {
    await this.repo.save(region);
    return region;
  }
}
