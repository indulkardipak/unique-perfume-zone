"use client";

import Link from "next/link";
import { Search, ShoppingBag, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-white">Unique</span>{" "}
          <span className="text-yellow-400">Perfume Zone</span>
        </Link>

        {/* Menu */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="text-gray-300 hover:text-yellow-400 transition">
            Home
          </Link>

          <Link href="/shop" className="text-gray-300 hover:text-yellow-400 transition">
            Shop
          </Link>

          <Link href="/brands" className="text-gray-300 hover:text-yellow-400 transition">
            Brands
          </Link>

          <Link href="/contact" className="text-gray-300 hover:text-yellow-400 transition">
            Contact
          </Link>
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          <Search
            size={20}
            className="cursor-pointer text-gray-300 hover:text-yellow-400"
          />

          <ShoppingBag
            size={20}
            className="cursor-pointer text-gray-300 hover:text-yellow-400"
          />

          <User
            size={20}
            className="cursor-pointer text-gray-300 hover:text-yellow-400"
          />
        </div>

      </div>
    </header>
  );
}