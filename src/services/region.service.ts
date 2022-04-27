import { Injectable } from '@nestjs/common';
import { RegionRepo } from 'src/core/repos/region.repo';
import { Region, ResultList } from 'src/core/types';

@Injectable()
export class RegionService {
  constructor(private repo: RegionRepo) {}

  async findAll(): Promise<ResultList<Region>> {
    const regions = await this.repo.findAll();

    return { items: regions, count: regions.length };
  }
}
