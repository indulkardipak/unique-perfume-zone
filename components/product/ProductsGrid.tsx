import { Product } from "@/types/product";
import ProductCard from "./ProductCard";

interface ProductsGridProps {
  products: Product[];
}

export default function ProductsGrid({
  products,
}: ProductsGridProps) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-zinc-800 p-16 text-center">
        <h2 className="text-2xl font-semibold text-white">
          No Products Found
        </h2>

        <p className="mt-3 text-zinc-400">
          Please add products from the admin panel.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
}