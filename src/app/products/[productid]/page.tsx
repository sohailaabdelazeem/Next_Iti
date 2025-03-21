import TextExpander from "@/components/TextExpander";
import React from "react";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

export default async function ProductDetails({ params }: { params: { productid: string } }) {
  try {
    console.log("Params received:", params); 

    const res = await fetch(`https://fakestoreapi.com/products/${params.productid}`, {
      cache: "no-store", 
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch product: ${res.status} ${res.statusText}`);
    }

    const product: Product = await res.json();

    return (
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
        <img src={product.image} alt={product.title} className="w-64 h-64 object-contain mx-auto" />
        <h1 className="text-2xl font-bold mt-4">{product.title}</h1>
        <p className="text-gray-600">
          {product.description}
            <TextExpander>{product.description}</TextExpander>
           </p>
        <p className="text-xl font-semibold text-yellow-500 mt-2">${product.price}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <p className="text-sm text-yellow-500"> {product.rating.rate} ({product.rating.count})</p>
      </div>
    );

  } catch (error) {
    console.error("Error fetching product details:", error);

    return (
      <div className="text-center text-red-600">
        <h1 className="text-xl font-bold">Error Loading Product</h1>
        <p>Please try again later.</p>
      </div>
    );
  }
}

