/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  Length,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  name: string;

  @IsStrongPassword({
    minLength: 8,
    minLowercase: 1,
    minUppercase: 1,
    minNumbers: 1,
    minSymbols: 1,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  birthday: string;

  @IsNotEmpty()
  @IsNumber()
  credictCard: number;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  city: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
