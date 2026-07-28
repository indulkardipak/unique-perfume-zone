import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-white">
          Products
        </h1>

        <Link
          href="/admin/products/new"
          className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
        >
          + Add Product
        </Link>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <p className="text-zinc-400">
          No products available.
        </p>
      </div>
    </div>
  );
}