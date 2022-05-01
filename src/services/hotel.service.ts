import { Injectable } from '@nestjs/common';
import { HotelRepo } from 'src/core/repos/hotel.repo';
import { Hotel, ResultList } from 'src/core/types';

@Injectable()
export class HotelService {
  constructor(private repo: HotelRepo) {}

  async findAll(): Promise<ResultList<Hotel>> {
    const hotels = await this.repo.findAll();

    return { items: hotels, count: hotels.length };
  }
}
