import { IsString } from "class-validator";

export class CreateReviewDto {
 @IsString()
 user_id: string;

 @IsString()
 review: string;

}
