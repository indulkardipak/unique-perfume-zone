import ProductsTable from "@/components/admin/products/ProductsTable";

export default function ProductsPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-white">
        Products
      </h1>

      <ProductsTable />
    </div>
  );
}