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
  prodcutImagen: string;

  @IsString()
  @IsNotEmpty()
  productDescription: string;
}
