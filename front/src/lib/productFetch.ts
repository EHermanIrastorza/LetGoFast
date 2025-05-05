import { ProductInterface } from "@/interface/productInterface";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchProducts(): Promise<ProductInterface[]> {
    try {
      const res = await fetch(`${APIURL}/products`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const products: ProductInterface[] = await res.json();
      console.log("products", products);
      return products;
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      } else {
        throw new Error("An unknown error occurred");
      }
    }
}

export async function getProductId(id: string):Promise<ProductInterface> {
  try {
    const res = await fetch(`${APIURL}/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      next: { revalidate: 60 },
    });
    const products: ProductInterface = await res.json();
    console.log("products en el fetch", products);
    if (!products) throw new Error("No existe el producto");
    return products;
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(error.message);
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}