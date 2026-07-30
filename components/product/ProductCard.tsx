import Image from "next/image";
import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

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
    <Link
      href={`/products/${product.slug}`}
      className="group block overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400"
    >
      {/* Product Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-black">
        {product.featured && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            Featured
          </span>
        )}

        {discount > 0 && (
          <span className="absolute right-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-xs font-bold text-white">
            {discount}% OFF
          </span>
        )}

        <button
          onClick={(e) => e.preventDefault()}
          className="absolute bottom-4 right-4 z-10 rounded-full bg-white/10 p-2 text-white backdrop-blur transition hover:bg-yellow-400 hover:text-black"
        >
          <Heart size={18} />
        </button>

        <Image
          src={product.image}
          alt={product.name}
          width={220}
          height={260}
          className="object-contain transition duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-yellow-400">
          {product.brand}
        </p>

        <h3 className="mt-2 line-clamp-2 text-xl font-bold text-white">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <Star
            size={16}
            className="fill-yellow-400 text-yellow-400"
          />

          <span className="text-sm text-zinc-300">
            {product.rating ?? 5}
          </span>

          <span className="text-sm text-zinc-500">
            (0 Reviews)
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            ₹{product.price}
          </span>

          {product.mrp > product.price && (
            <span className="text-zinc-500 line-through">
              ₹{product.mrp}
            </span>
          )}
        </div>

        <button
          onClick={(e) => e.preventDefault()}
          className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300"
        >
          <ShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </Link>
  );
}