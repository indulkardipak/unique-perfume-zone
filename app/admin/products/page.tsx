import Link from "next/link";
import ProductsTable from "@/components/admin/products/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Products
          </h1>

          <p className="mt-2 text-zinc-400">
            Manage all your products
          </p>
        </div>

        <Link
          href="/admin/products/add"
          className="rounded-lg bg-yellow-500 px-5 py-3 font-semibold text-black hover:bg-yellow-400"
        >
          + Add Product
        </Link>
      </div>

      <ProductsTable />
    </div>
  );
}