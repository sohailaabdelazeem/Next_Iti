"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaTrash } from "react-icons/fa"; 

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
    async function fetchWishlistItems() {
      if (storedWishlist.length > 0) {
        const responses = await Promise.all(
          storedWishlist.map((id: number) =>
            fetch(`https://fakestoreapi.com/products/${id}`).then((res) => res.json())
          )
        );
        setProducts(responses);
      }
    }

    fetchWishlistItems();
  }, []);

  const removeFromWishlist = (id: number) => {
    const updatedWishlist = wishlist.filter((item) => item !== id);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg my-8">
      <h1 className="text-2xl font-bold">Wishlist</h1>
     

      {products.length === 0 ? (
        <p className="text-gray-500 mt-4">Your wishlist is empty.</p>
      ) : (
        <div className="space-y-4 mt-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex items-center p-4 border rounded-lg shadow hover:shadow-lg transition-shadow duration-200"
            >
              <Link href={`/products/${product.id}`} className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-24 h-24 object-contain"
                />
              </Link>
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">{product.title}</h2>
                <p className="text-blue-600 font-bold">${product.price}</p>
              </div>
              <button
                className="p-2 text-red-500 hover:text-red-700 hover:bg-red-100 rounded-full transition-colors duration-200"
                onClick={() => removeFromWishlist(product.id)}
                title="Remove from wishlist"
              >
                <FaTrash className="w-5 h-5" /> 
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}