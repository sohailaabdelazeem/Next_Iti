"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { FaTrash } from "react-icons/fa";

export default function Cart() {
  const [cart, setCart] = useState<{ id: number; quantity: number }[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    console.log("Cart from localStorage:", storedCart);
    setCart(storedCart);

     async function fetchProducts() {
      const res = await fetch(`https://fakestoreapi.com/products`);
      const data = await res.json();
      console.log("Fetched products:", data);
      setProducts(data);
      setIsLoading(false);
    }

    fetchProducts();
  }, []);

  const getProductById = (id: number) => {
    return products.find((product) => product.id === id);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => {
      const product = getProductById(item.id);
      return total + (product?.price || 0) * item.quantity;
    }, 0);
  };

  const removeItem = (id: number) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeAllItems = () => {
    setCart([]);
    localStorage.setItem("cart", JSON.stringify([]));
  };

  return (
    <div className="bg-white m-8">
      <div className="container mx-auto px-8">
        <h1 className="text-2xl font-bold">Cart</h1>
       
        {isLoading ? (
          <p>Loading cart...</p>
        ) : cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="mt-4 overflow-x-auto">
              <table className="min-w-full bg-white border">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="py-2 px-4 border">Image</th>
                    <th className="py-2 px-4 border">Title</th>
                    <th className="py-2 px-4 border">Category</th>
                    <th className="py-2 px-4 border">Rating</th>
                    <th className="py-2 px-4 border">Quantity</th>
                    <th className="py-2 px-4 border">Price</th>
                    <th className="py-2 px-4 border">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((item) => {
                    const product = getProductById(item.id);
                    return (
                      <tr key={item.id} className="hover:bg-gray-50">
                        <td className="py-2 px-4 border">
                          <img
                            src={product?.image}
                            alt={product?.title}
                            className="w-16 h-16 object-contain"
                          />
                        </td>
                        <td className="py-2 px-4 border">{product?.title}</td>
                        <td className="py-2 px-4 border">{product?.category}</td>
                        <td className="py-2 px-4 border">
                          {product?.rating?.rate} ({product?.rating?.count} reviews)
                        </td>
                        <td className="py-2 px-4 border">{item.quantity}</td>
                        <td className="py-2 px-4 border">
                          ${(product?.price * item.quantity).toFixed(2)}
                        </td>
                      
                        <td className="py-2 px-4 border">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:text-red-700
                       hover:bg-red-100 rounded-full transition-colors duration-200"
                      title="Remove item"
                    >
                      <FaTrash className="w-5 h-5" />
                    </button>
                         </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Total: ${getTotalPrice().toFixed(2)}</h2>
              <button
                onClick={removeAllItems}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 flex items-center gap-2"
              >
                <FaTrash className="w-5 h-5" />
                <span>Remove All Items</span>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}