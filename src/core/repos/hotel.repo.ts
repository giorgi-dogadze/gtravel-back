import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HotelEntity } from '../entities/hotel.entity';

@Injectable()
export class HotelRepo {
  constructor(
    @InjectRepository(HotelEntity)
    private repo: Repository<HotelEntity>,
  ) {}

  public async findAll(): Promise<HotelEntity[]> {
    return this.repo.find();
  }

  public async save(hotel: HotelEntity): Promise<HotelEntity> {
    await this.repo.save(hotel);
    return hotel;
  }
}
