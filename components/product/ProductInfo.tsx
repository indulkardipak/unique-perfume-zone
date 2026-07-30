"use client";

import { Product } from "@/types/product";
import ProductActions from "./ProductActions";

interface ProductInfoProps {
  product: Product;
}

function InfoCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-zinc-500">
        {title}
      </p>

      <p className="mt-1 font-medium text-white">
        {value}
      </p>
    </div>
  );
}

export default function ProductInfo({
  product,
}: ProductInfoProps) {
  const discount =
    product.mrp > 0
      ? Math.round(
          ((product.mrp - product.price) / product.mrp) * 100
        )
      : 0;

  return (
    <div className="space-y-8">
      {/* Brand + Name */}
      <div>
        <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
          {product.brand}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-white lg:text-4xl">
          {product.name}
        </h1>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-lg text-yellow-400">★★★★★</span>

          <span className="text-sm text-zinc-400">
            ({product.rating}/5)
          </span>
        </div>
      </div>

      {/* Price */}
      <div className="flex flex-wrap items-end gap-4">
        <span className="text-4xl font-bold text-red-500">
          ₹{product.price}
        </span>

        <span className="pb-1 text-xl text-zinc-500 line-through">
          ₹{product.mrp}
        </span>

        {discount > 0 && (
          <span className="rounded-lg bg-green-600 px-3 py-1 text-sm font-semibold text-white">
            {discount}% OFF
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">
        <div className="grid grid-cols-2 gap-6">
          <InfoCard title="Brand" value={product.brand} />

          <InfoCard title="Category" value={product.category} />

          <InfoCard
            title="Gender"
            value={product.gender ?? "-"}
          />

          <InfoCard
            title="Size"
            value={product.size ?? "-"}
          />

          <InfoCard
            title="Stock"
            value={product.stock > 0 ? "In Stock" : "Out of Stock"}
          />
        </div>
      </div>

      {/* Description */}
      {product.description && (
        <div>
          <h2 className="mb-3 text-lg font-semibold text-white">
            Description
          </h2>

          <p className="max-w-xl leading-8 text-zinc-400">
            {product.description}
          </p>
        </div>
      )}

      <ProductActions product={product} />
    </div>
  );
}