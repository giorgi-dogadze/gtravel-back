import { Injectable, NotFoundException } from '@nestjs/common';
import { CityEntity } from 'src/core/entities/city.entity';
import { CityRepo } from 'src/core/repos/city.repo';
import { City, ResultList } from 'src/core/types';
import { CitySlugParam } from 'src/messages/city.messaage';

@Injectable()
export class CityService {
  constructor(private repo: CityRepo) {}

  async findAll(): Promise<ResultList<City>> {
    const cities = await this.repo.findAll();

    const filteredCities = cities.filter(
      (city) => !city.name.includes('TbilisiCity'),
    );

    return { items: filteredCities, count: cities.length };
  }

  async readBySlug(props: CitySlugParam): Promise<CityEntity> {
    const city = await this.repo.findBySlug(props.citySlug);

    if (city == null) {
      throw new NotFoundException(`City ${props.citySlug} not found`);
    }

    return city;
  }
}
