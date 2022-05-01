import { Controller, Get } from '@nestjs/common';
import { ResultList, Hotel } from 'src/core/types';
import { HotelService } from 'src/services/hotel.service';

@Controller()
export class HotelController {
  constructor(private service: HotelService) {}

  @Get('/hotels')
  async findAll(): Promise<ResultList<Hotel>> {
    const resultList = await this.service.findAll();

    return resultList;
  }
}
