import { IsDateString, IsString } from 'class-validator';

export class CreateReserveDto {
  @IsString()
  user_id: string;

  @IsString()
  product_id: string;

  @IsDateString()
  date: string;

  @IsString()
  time: string;
}
