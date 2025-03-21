"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Filter() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [products, setProducts] = useState<any[]>([]);

   useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      fetchProducts(category);
    }
  }, [searchParams]);

  async function fetchProducts(category: string) {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }

   function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams);
    params.set("category", filter);
    router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      
      <div className="flex gap-5 justify-center border-b border-primary-900">
        <button
          className="text-cyan-500 text-2xl"
          onClick={() => handleFilter("electronics")}
        >
          electronics
        </button>
        <button
          className="text-cyan-500 text-2xl"
          onClick={() => handleFilter("jewelery")}
        >
          jewelery
        </button>
        <button
          className="text-cyan-500 text-2xl"
          onClick={() => handleFilter("women's clothing")}
        >
          Woman's Clothing
        </button>
        <button
          className="text-cyan-500 text-2xl"
          onClick={() => handleFilter("men's clothing")}
        >
          Men's Clothing
        </button>
      </div>

      <div className="mt-5">
        <h2 className="text-2xl font-bold mb-4">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border-primary-900 p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-48 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
