import { Product } from "@/types/product";
import { connectDB } from "@/lib/mongodb";
import ProductModel from "@/models/Product";
import ProductsGrid from "@/components/product/ProductsGrid";

async function getProducts(): Promise<Product[]> {
  await connectDB();

  const products = await ProductModel.find({
    isActive: true,
  })
    .sort({ createdAt: -1 })
    .lean();

  return products.map((product: any) => ({
    ...product,
    _id: product._id.toString(),
  }));
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mb-10">
        <p className="text-sm uppercase tracking-[0.25em] text-red-500">
          Unique Perfume Zone
        </p>

        <h1 className="mt-2 text-4xl font-bold text-white">
          All Perfumes
        </h1>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Discover premium perfumes from Ajmal, Lattafa, Armaf, Afnan and more.
        </p>
      </div>

      <ProductsGrid products={products} />
    </main>
  );
}