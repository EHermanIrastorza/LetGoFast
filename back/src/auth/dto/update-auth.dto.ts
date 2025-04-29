import { PartialType } from '@nestjs/mapped-types';
import { CreateAuthDto } from './create-auth.dto';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Length,
  MinLength,
} from 'class-validator';

export class UpdateAuthDto extends PartialType(CreateAuthDto) {
  @IsString()
  name: string;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(16, { message: 'Min length is 16' })
  credictCard: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  city: string;
}
