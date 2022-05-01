import { Injectable, NotFoundException } from '@nestjs/common';
import { RegionEntity } from 'src/core/entities/region.entity';
import { RegionRepo } from 'src/core/repos/region.repo';
import { Region, ResultList } from 'src/core/types';
import { RegionSlugParam } from 'src/messages/region.message';

@Injectable()
export class RegionService {
  constructor(private repo: RegionRepo) {}

  async findAll(): Promise<ResultList<Region>> {
    const regions = await this.repo.findAll();

    return { items: regions, count: regions.length };
  }

  async readBySlug(props: RegionSlugParam): Promise<RegionEntity> {
    const region = await this.repo.findBySlug(props.regionSlug);

    if (region == null) {
      throw new NotFoundException(`Region ${props.regionSlug} not found`);
    }

    return region;
  }
}
