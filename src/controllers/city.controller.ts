import { Controller, Get } from '@nestjs/common';
import { ResultList, City } from 'src/core/types';
import { CityService } from 'src/services/city.service';

@Controller()
export class CityController {
  constructor(private service: CityService) {}

  @Get('/cities')
  async findAll(): Promise<ResultList<City>> {
    const resultList = await this.service.findAll();

    return resultList;
  }
}
