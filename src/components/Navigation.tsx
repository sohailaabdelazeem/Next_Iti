"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { useCart } from "@/context/CartContext";
import { auth } from "@/service/auth";
 
const navItems = [
  { name: 'home', path: "/" },
  // { name: 'rooms', path: "/rooms" },
  { name: 'about', path: "/about" },
  { name: 'account', path: "/account" },
  { name: 'product', path: "/products" },
  {name:'wishlist',path:'/wishlist'}
   
];

export default async function Navigation() {
  // console.log(session);
  const nav=[...navItems]
  const session=await auth();
  if(session?.user) nav.push({name:'logout',path:'/logout'});
  if(!session?.user) nav.push({name:'login',path:'/login'});

  // const pathname = usePathname();
  // const { cartCount} = useCart();
 
   return (
    <header className="relative bg-white">
      {/* Top banner */}
      <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        Get free delivery on orders over $100
      </p>
      {/* Navbar */}
      <nav aria-label="Top" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-b border-gray-200">
          <div className="flex h-16 items-center">
            {/* Mobile menu toggle */}
            <button type="button" className="relative rounded-md bg-white p-2 text-gray-400 lg:hidden">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
            {/* Logo */}
            <div className="ml-4 flex lg:ml-0">
              <a href="#">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="" />
              </a>
            </div>

            {/* Flyout menus */}
            <div className="hidden lg:ml-8 lg:block lg:self-stretch">
              <div className="flex h-full space-x-8">
                {navItems.map(({ name, path }) => (
                  <div className="flex" key={name}>
                    <div className="relative flex">
                      <div className="relative z-10 -mb-px flex items-center border-b-2 border-transparent pt-px text-sm font-medium text-gray-700 transition-colors duration-200 ease-out hover:text-gray-800" aria-expanded="false">
                        <NavLink name={name} path={path} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Right side icons */}
            <div className="ml-auto flex items-center">
               <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
              <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-gray-800">Sign in</Link>
              <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
              <Link href="/signup" className="text-sm font-medium text-gray-700 hover:text-gray-800">Create account</Link>
              </div>
              {/* Currency selector */}
              <div className="hidden lg:ml-8 lg:flex">
                <a href="#" className="flex items-center text-gray-700 hover:text-gray-800">
                  <img src="https://tailwindcss.com/plus-assets/img/flags/flag-canada.svg" alt="" className="block h-auto w-5 shrink-0" />
                  <span className="ml-3 block text-sm font-medium">CAD</span>
                  <span className="sr-only">, change currency</span>
                </a>
              </div>
              {/* Search icon */}
              <div className="flex lg:ml-6">
                <a href="#" className="p-2 text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Search</span>
                  <svg className="size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                </a>
              </div>
              {/* Cart icon */}
            
<div className="ml-4 flow-root lg:ml-6">
      <Link href="/cart" className="group -m-2 flex items-center p-2">
        <svg className="size-6 shrink-0 text-gray-400 group-hover:text-gray-500" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path strokeLinecap="round" strokeLinejoin="round"
           d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>
         <span className="sr-only">items in cart, view bag</span>
      </Link>
    </div>

  
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}