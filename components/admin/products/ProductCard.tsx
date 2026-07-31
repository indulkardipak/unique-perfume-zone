import Link from "next/link";
import Image from "next/image";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({
  product,
}: ProductCardProps) {
  const discount =
    product.mrp > product.price
      ? Math.round(
          ((product.mrp - product.price) / product.mrp) * 100
        )
      : 0;

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="group overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:border-red-500 hover:shadow-2xl hover:shadow-red-500/10">

        {/* Image */}
        <div className="relative bg-white p-6">
          {discount > 0 && (
            <span className="absolute left-3 top-3 rounded-full bg-red-600 px-3 py-1 text-xs font-semibold text-white">
              -{discount}%
            </span>
          )}

          {product.bestSeller && (
            <span className="absolute right-3 top-3 rounded-full bg-amber-500 px-3 py-1 text-xs font-semibold text-black">
              Best Seller
            </span>
          )}

          {!product.bestSeller && product.newArrival && (
            <span className="absolute right-3 top-3 rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
              New
            </span>
          )}

          <Image
            src={product.image}
            alt={product.name}
            width={260}
            height={260}
            unoptimized
            className="mx-auto h-64 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-3 p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
            {product.brand}
          </p>

          <h3 className="line-clamp-2 min-h-[56px] text-lg font-semibold text-white">
            {product.name}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-sm text-yellow-400">
              ⭐ {product.rating.toFixed(1)}
            </span>

            <span
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                product.stock > 0
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
            >
              {product.stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          <div className="flex items-end gap-3">
            <span className="text-2xl font-bold text-red-500">
              ₹{product.price}
            </span>

            {product.mrp > product.price && (
              <span className="text-sm text-zinc-500 line-through">
                ₹{product.mrp}
              </span>
            )}
          </div>
        </div>

      </div>
    </Link>
  );
}