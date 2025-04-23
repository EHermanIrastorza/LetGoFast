import { IsDate, IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  user_id: string;

  @IsString()
  review: string;

  @IsDate()
  reviewDate: Date;

  @IsNumber()
  reviewRate: number;
}
