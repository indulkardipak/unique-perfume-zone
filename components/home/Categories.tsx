import CategoryCard from "./CategoryCard";
import { categories } from "@/lib/categories";

export default function Categories() {
  return (
    <section className="bg-black py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-white">
            Shop by Category
          </h2>

          <p className="mt-4 text-zinc-400">
            Find the perfect fragrance for every occasion.
          </p>

        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              name={category.name}
              description={category.description}
              emoji={category.emoji}
            />
          ))}

        </div>

      </div>

    </section>
  );
}