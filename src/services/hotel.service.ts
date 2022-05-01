import { Injectable, NotFoundException } from '@nestjs/common';
import { HotelEntity } from 'src/core/entities/hotel.entity';
import { HotelRepo } from 'src/core/repos/hotel.repo';
import { Hotel, ResultList } from 'src/core/types';
import { HotelSlugParam } from 'src/messages/hotel.message';

@Injectable()
export class HotelService {
  constructor(private repo: HotelRepo) {}

  async findAll(): Promise<ResultList<Hotel>> {
    const hotels = await this.repo.findAll();

    return { items: hotels, count: hotels.length };
  }

  async readBySlug(props: HotelSlugParam): Promise<HotelEntity> {
    const hotel = await this.repo.findBySlug(props.hotelSlug);

    if (hotel == null) {
      throw new NotFoundException(`Hotel ${props.hotelSlug} not found`);
    }

    return hotel;
  }
}
