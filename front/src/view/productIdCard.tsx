"use client"
import { ProductInterface } from "@/interface/productInterface";
import Image from "next/image";

const ProductsIdCard: React.FC<ProductInterface> = ({
  productGear,
  productImage,
  productModel,
  productName,
  productPrice,
  productSpeed,
  productStyle,
  productDescription,
}) => {

  return (
    <div>
      <div>
        <h2>{productName}</h2>

        <p>{productDescription}</p>
        <div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
          {productImage &&
            productImage.map((imageSrc, imagenes) => (
              <Image
                key={imagenes}
                src={imageSrc}
                alt={`${productName} - Imagen ${imagenes + 1}`}
                width={500} 
                height={500}
                style={{ objectFit: 'cover' }}
              />
            ))}
        </div>
        <p>{productPrice}</p>
        <p>{productModel}</p>
        <p>{productSpeed}</p>
        <p>{productGear}</p>
        <p>{productStyle}</p>
      </div>

    </div>
  );
};
export default ProductsIdCard;