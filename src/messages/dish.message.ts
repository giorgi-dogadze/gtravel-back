import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class DishSlugParam {
  @ApiProperty()
  @IsString()
  dishSlug!: string;
}
