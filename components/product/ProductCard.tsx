import Image from "next/image";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400">

      {/* Product Image */}
      <div className="relative flex h-72 items-center justify-center overflow-hidden bg-black">

        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-yellow-400 px-3 py-1 text-xs font-bold text-black">
            {product.badge}
          </span>
        )}

        <button className="absolute right-4 top-4 z-10 rounded-full bg-white/10 p-2 backdrop-blur hover:bg-yellow-400 hover:text-black">
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

        <h3 className="mt-2 text-xl font-bold text-white">
          {product.name}
        </h3>

        <div className="mt-3 flex items-center gap-2">
          <Star size={16} className="fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-zinc-300">
            {product.rating}
          </span>

          <span className="text-sm text-zinc-500">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-white">
            ₹{product.price}
          </span>

          <span className="text-zinc-500 line-through">
            ₹{product.originalPrice}
          </span>
        </div>

        <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-300">
          <ShoppingCart size={18} />
          Add to Cart
        </button>

      </div>
    </div>
  );
}