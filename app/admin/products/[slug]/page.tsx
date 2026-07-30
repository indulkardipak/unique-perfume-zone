import { notFound } from "next/navigation";
import ProductDetails from "@/components/product/ProductDetails";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

async function getProduct(slug: string) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/products/slug/${slug}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) return null;

  return res.json();
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;

  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="container mx-auto px-4 py-10">
      <ProductDetails product={product} />
    </main>
  );
}