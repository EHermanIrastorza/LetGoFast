import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  productName: string;

  @IsNumber()
  @IsPositive()
  productPrice: number;

  @IsString()
  @IsNotEmpty()
  productImage: string;

  @IsString()
  @IsNotEmpty()
  productDescription: string;

  @IsString()
  @IsNotEmpty()
  productModel: string;

  @IsString()
  @IsNotEmpty()
  productSpeed: string;

  @IsString()
  @IsNotEmpty()
  productGear: string;

  @IsString()
  @IsNotEmpty()
  productStyle: string;
}
