"use client"; 

import { useState, useEffect } from "react";
import Link from "next/link";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

export default function page() {
  const [products, setProducts] = useState([]);
  const [wishlist, setWishlist] = useState<number[]>([]);
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);

  useEffect(() => {
    async function fetchProducts() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      setProducts(data);
    }

    fetchProducts();

    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);

    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  const addToWishlist = (id: number) => {
    const updatedWishlist = [...wishlist, id];
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const addToCart = (id: number) => {
    const existingItem = cart.find((item) => item.id === id);
    let updatedCart;

    if (existingItem) {
       updatedCart = cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
       updatedCart = [...cart, { id, quantity: 1 }];
    }

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const getCartCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  return (
    <div className="bg-white m-8">
      <div className="container mx-auto px-8">
        <h1 className="text-2xl font-bold">Products</h1>
  

        <div className="flex flex-wrap -mx-2 mt-4 my-">
          {products.map((product: any) => (
            <div key={product.id} className="w-full sm:w-1/2 lg:w-1/3 px-2">
              <div className="group text-base sm:text-sm">
                <Link href={`/products/${product.id}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-square w-full rounded-lg object-contain cursor-pointer group-hover:opacity-75"
                  />
                </Link>

                <div className="text-center mt-4">
                  <Link
                    href={`/products/${product.id}`}
                    className="block font-medium text-gray-900"
                  >
                    {product.title}
                  </Link>
                  <p className="text-blue-600 font-bold">${product.price}</p>

                   <div className="mt-2 flex justify-center gap-2">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2"
                      onClick={() => addToWishlist(product.id)}
                    >
                      <FaHeart className="w-5 h-5" />  
                    </button>
                    <button
                      className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 flex items-center gap-2"
                      onClick={() => addToCart(product.id)}
                    >
                      <FaShoppingCart className="w-5 h-5" />
                      
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}