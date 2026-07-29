import ProductForm from "@/components/admin/products/ProductForm";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function EditProductPage({
  params,
}: Props) {
  const { id } = await params;

  return (
    <div className="max-w-5xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white">
          Edit Product
        </h1>

        <p className="mt-2 text-zinc-400">
          Update your perfume details
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <ProductForm
          mode="edit"
          productId={id}
        />
      </div>
    </div>
  );
}