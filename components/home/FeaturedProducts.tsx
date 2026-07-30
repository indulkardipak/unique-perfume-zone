"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ProductCard from "@/components/product/ProductCard";
import { Product } from "@/types/product";

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products/featured");

        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading featured products:", error);
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="font-semibold text-yellow-400">
              Premium Collection
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              Featured Products
            </h2>
          </div>

          <Link
            href="/products"
            className="rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 transition hover:bg-yellow-400 hover:text-black"
          >
            View All
          </Link>
        </div>

        {loading ? (
          <p className="py-16 text-center text-zinc-400">
            Loading products...
          </p>
        ) : products.length === 0 ? (
          <p className="py-16 text-center text-zinc-500">
            No featured products found.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard
                key={product._id}
                product={product}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}