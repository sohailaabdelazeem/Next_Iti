 
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SideBarItems = [
  { name: "Home", path: "/account/home" },
  { name: "Category", path: "/account/category" },
  { name: "Profile", path: "/account/profile" }, 
  { name: "Logout", path: "/account/logout" }, 
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4">
      {SideBarItems.map(({ name, path }) => (
        <Link
          key={path} 
          href={path}
          className={`block px-4 py-2 rounded-lg text-lg font-medium hover:bg-blue-200 transition ${
            pathname === path ? "bg-blue-500 text-white" : "text-gray-700"
          }`}
        >
          {name}
        </Link>
      ))}
    </div>
  );
}

