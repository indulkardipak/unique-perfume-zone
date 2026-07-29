import ProductForm from "@/components/admin/products/ProductForm";

export default function AddProductPage() {
  return (
    <div className="max-w-5xl">
      <h1 className="mb-8 text-3xl font-bold text-white">
        Add New Product
      </h1>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <ProductForm />
      </div>
    </div>
  );
}