"use client";

import Link from "next/link";
import { Menu, Search, Heart, ShoppingCart, User } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide text-yellow-500">
          UNIQUE PERFUME ZONE
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/" className="text-white hover:text-yellow-500">
            Home
          </Link>

          <Link href="/products" className="text-white hover:text-yellow-500">
            Products
          </Link>

          <Link href="/brands" className="text-white hover:text-yellow-500">
            Brands
          </Link>

          <Link href="/offers" className="text-white hover:text-yellow-500">
            Offers
          </Link>

          <Link href="/contact" className="text-white hover:text-yellow-500">
            Contact
          </Link>
        </nav>

        {/* Right Icons */}
        <div className="flex items-center gap-5">
          <Search className="h-5 w-5 cursor-pointer text-white hover:text-yellow-500" />
          <Heart className="h-5 w-5 cursor-pointer text-white hover:text-yellow-500" />
          <ShoppingCart className="h-5 w-5 cursor-pointer text-white hover:text-yellow-500" />
          <User className="h-5 w-5 cursor-pointer text-white hover:text-yellow-500" />

          <button className="md:hidden">
            <Menu className="h-6 w-6 text-white" />
          </button>
        </div>

      </div>
    </header>
  );
}