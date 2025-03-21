"use client";
import { createContext, useContext, useState, ReactNode } from "react";

const CartContext = createContext<{ cartCount: number; addToCart: () => void } | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartCount, setCartCount] = useState<number>(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };
  console.log("Cart Count:", cartCount);
  return <CartContext.Provider value={{ cartCount, addToCart }}>{children}</CartContext.Provider>;
}

 export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}
