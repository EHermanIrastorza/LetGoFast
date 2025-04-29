/* eslint-disable @typescript-eslint/no-unsafe-call */
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  IsStrongPassword,
  Length,
  MinLength,
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

    @IsString()
    @IsNotEmpty()
    @MinLength(16, { message: 'Min length is 16' })
    credictCard: string;

  @IsString()
  @IsNotEmpty()
  @Length(3, 50)
  city: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
