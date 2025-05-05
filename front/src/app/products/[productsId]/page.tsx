import { getProductId } from "@/lib/productFetch";
import ProductsIdCard from "@/view/productIdCard";
import React from "react";



const productPage = async ({ params }: { params: { productsId: string } }) => {
  const product = await getProductId(params.productsId);
  return (
    <div>
      <ProductsIdCard {...product} />
    </div>
  );
};
export default productPage;
