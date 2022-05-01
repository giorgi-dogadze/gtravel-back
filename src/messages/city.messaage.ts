import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CitySlugParam {
  @ApiProperty()
  @IsString()
  citySlug!: string;
}
