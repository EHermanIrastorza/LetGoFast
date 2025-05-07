  "use client"
  import { ProductInterface } from "@/interface/productInterface";
  import Image from "next/image";
  import ReviewForm from "./ReviewsFormView";
  import { useAuth } from "@/context/authContext";
  
  const ProductsIdCard: React.FC<ProductInterface> = ({
    id,
    productGear,
    productImage,
    productModel,
    productName,
    productPrice,
    productSpeed,
    productStyle,
    productDescription,
    reviews,
  }) => {
    const { user } = useAuth();
  
    const product = {
      id,
      productName,
      productDescription,
      productPrice,
      productImage,
      productModel,
      productSpeed,
      productGear,
      productStyle,
      reviews,
    };
  
    return (
      <div>
        <div>
          <h2>{productName}</h2>
          <p>{productDescription}</p>
          <div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
            {productImage &&
              productImage.map((imageSrc, imagenes) => (
                <Image
                  key={imagenes}
                  src={imageSrc}
                  alt={`${productName} - Imagen ${imagenes + 1}`}
                  width={500}
                  height={500}
                  style={{ objectFit: "cover" }}
                />
              ))}
          </div>
          <p>{productPrice}</p>
          <p>{productModel}</p>
          <p>{productSpeed}</p>
          <p>{productGear}</p>
          <p>{productStyle}</p>
        </div>
        <div>
          <h3>Reseñas:</h3>
          {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
              <div
                key={review.review}
                style={{
                  border: "1px solid #ccc",
                  padding: "8px",
                  marginBottom: "8px",
                }}
              >
                <p><strong>Comentario:</strong> {review.review}</p>
                <p><strong>Puntaje:</strong> {review.reviewRate} ⭐</p>
                <p><strong>Fecha:</strong> {new Intl.DateTimeFormat("es-AR", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
}).format(new Date(review.reviewDate))}</p>
              </div>
            ))
          ) : (
            <p>Este producto aún no tiene reseñas.</p>
          )}
        </div>
        <div>
          {user && <ReviewForm user={user} product={product} />}
        </div>
      </div>
    );
  };
  
  export default ProductsIdCard;