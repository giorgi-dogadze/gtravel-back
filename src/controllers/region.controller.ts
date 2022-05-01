import { Controller, Get, Param } from '@nestjs/common';
import { RegionEntity } from 'src/core/entities/region.entity';
import { ResultList, Region } from 'src/core/types';
import { RegionSlugParam } from 'src/messages/region.message';
import { RegionService } from 'src/services/region.service';

@Controller()
export class RegionController {
  constructor(private service: RegionService) {}

  @Get('/regions')
  async findAll(): Promise<ResultList<Region>> {
    const resultList = await this.service.findAll();

    return resultList;
  }

  @Get('/regions/:regionSlug')
  async readBySlug(@Param() param: RegionSlugParam): Promise<RegionEntity> {
    const region = await this.service.readBySlug(param);

    return region;
  }
}
