import { Controller, Get } from '@nestjs/common';
import { ResultList, Region } from 'src/core/types';
import { RegionService } from 'src/services/region.service';

@Controller()
export class RegionController {
  constructor(private service: RegionService) {}

  @Get('/regions')
  async findAll(): Promise<ResultList<Region>> {
    const resultList = await this.service.findAll();

    return resultList;
  }
}
