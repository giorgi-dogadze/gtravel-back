import { Injectable } from '@nestjs/common';
import { CityRepo } from 'src/core/repos/city.repo';
import { City, ResultList } from 'src/core/types';

@Injectable()
export class CityService {
  constructor(private repo: CityRepo) {}

  async findAll(): Promise<ResultList<City>> {
    const cities = await this.repo.findAll();

    return { items: cities, count: cities.length };
  }
}
