import ProductCard from "@/components/product/ProductCard";
import { featuredProducts } from "@/lib/products";

export default function FeaturedProducts() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-12 flex items-center justify-between">
          <div>
            <p className="text-yellow-400 font-semibold">
              Premium Collection
            </p>

            <h2 className="mt-2 text-4xl font-bold text-white">
              Featured Products
            </h2>
          </div>

          <button className="rounded-full border border-yellow-400 px-5 py-2 text-yellow-400 hover:bg-yellow-400 hover:text-black transition">
            View All
          </button>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}