import { Controller, Get, Param } from '@nestjs/common';
import { HotelEntity } from 'src/core/entities/hotel.entity';
import { ResultList, Hotel } from 'src/core/types';
import { HotelSlugParam } from 'src/messages/hotel.message';
import { HotelService } from 'src/services/hotel.service';

@Controller()
export class HotelController {
  constructor(private service: HotelService) {}

  @Get('/hotels')
  async findAll(): Promise<ResultList<Hotel>> {
    const resultList = await this.service.findAll();

    return resultList;
  }

  @Get('/hotels/:hotelSlug')
  async readBySlug(@Param() param: HotelSlugParam): Promise<HotelEntity> {
    const hotel = await this.service.readBySlug(param);

    return hotel;
  }
}
