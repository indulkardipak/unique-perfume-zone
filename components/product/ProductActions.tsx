"use client";

import { useState } from "react";

interface Product {
  stock: number;
}

interface ProductActionsProps {
  product: Product;
}

export default function ProductActions({
  product,
}: ProductActionsProps) {
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-5">

      <div className="flex items-center gap-4">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="h-10 w-10 rounded-lg bg-zinc-800 text-white"
        >
          -
        </button>

        <span className="text-white">{qty}</span>

        <button
          onClick={() => {
            if (qty < product.stock) {
              setQty((q) => q + 1);
            }
          }}
          className="h-10 w-10 rounded-lg bg-zinc-800 text-white"
        >
          +
        </button>
      </div>

      <div className="mt-6 flex gap-4">

        <button className="flex-1 rounded-xl bg-red-600 py-4 font-semibold text-white transition duration-300 hover:bg-red-700">
          Add To Cart
        </button>

        <button className="flex-1 rounded-xl border border-zinc-700 bg-zinc-900 py-4 font-semibold text-white transition duration-300 hover:bg-zinc-800">
          Buy Now
        </button>

      </div>

    </div>
  );
}