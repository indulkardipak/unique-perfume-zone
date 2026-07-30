import { notFound } from "next/navigation";
import { connectDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import ProductDetails from "@/components/product/ProductDetails";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

async function getProduct(slug: string) {
  await connectDB();

  const product = await Product.findOne({
    slug,
    isActive: true,
  }).lean();

  if (!product) {
    return null;
  }

  return {
    ...product,
    _id: product._id.toString(),
    createdAt: product.createdAt?.toISOString?.() ?? "",
    updatedAt: product.updatedAt?.toISOString?.() ?? "",
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
      <ProductDetails product={product} />
    </main>
  );
}