import { IsDateString, IsString } from 'class-validator';

export class CreateReserveDto {
  @IsDateString()
  date: string;
  @IsString()
  time: string;
}
