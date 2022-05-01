import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class RestaurantSlugParam {
  @ApiProperty()
  @IsString()
  restaurantSlug!: string;
}
