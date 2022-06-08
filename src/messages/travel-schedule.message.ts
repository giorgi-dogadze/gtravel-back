import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class TravelScheduleSlugParam {
  @ApiProperty()
  @IsString()
  travelScheduleSlug!: string;
}

export class TravelScheduleDestinationParam {
  @ApiProperty()
  @IsString()
  startDestination!: string;

  @ApiProperty()
  @IsString()
  endDestination!: string;
}
