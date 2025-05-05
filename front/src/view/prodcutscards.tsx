"use client"
import { ProductInterface } from "@/interface/productInterface";
import { fetchProducts } from "@/lib/productFetch";
import { useEffect, useState } from "react";
import Image from "next/image";


const ProductsCards = () => {
    const [products, setProducts] = useState<ProductInterface[]>([]);

    useEffect(() => {
        const getProducts = async () => {
            try {
                const productData = await fetchProducts();
                setProducts(productData);
            } catch (error: unknown) {
                if (error instanceof Error) {
                    throw new Error(error.message);
                } else {
                    throw new Error("An unknown error occurred");
                }
            }
        }
        getProducts();
    }, []);


    return (
        <div>
            {products.map((product) => (
                <div key={product.id} >
                    <h2>{product.productName}</h2>
                    <p>{product.productDescription}</p>
                    <Image src={product.productImage[0]} alt={product.productName} width={200} height={200} />
                    <p>{product.productPrice}</p>
                    <p>{product.productModel}</p>
                    <p>{product.productSpeed}</p>
                    <p>{product.productGear}</p>
                    <p>{product.productStyle}</p>
                </div>
            ))}
        </div>

    )
}

export default ProductsCards;