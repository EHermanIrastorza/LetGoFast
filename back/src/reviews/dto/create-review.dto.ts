import { IsNumber, IsString } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  user_id: string;

  @IsString()
  product_id: string;

  @IsString()
  review: string;

  @IsNumber()
  reviewRate: number;
}
