import { Controller, Get, Param } from '@nestjs/common';
import { CityEntity } from 'src/core/entities/city.entity';
import { ResultList, City } from 'src/core/types';
import { CitySlugParam } from 'src/messages/city.messaage';
import { CityService } from 'src/services/city.service';

@Controller()
export class CityController {
  constructor(private service: CityService) {}

  @Get('/cities')
  async findAll(): Promise<ResultList<City>> {
    const resultList = await this.service.findAll();

    return resultList;
  }

  @Get('/cities/:citySlug')
  async readBySlug(@Param() param: CitySlugParam): Promise<CityEntity> {
    const city = await this.service.readBySlug(param);

    return city;
  }
}
