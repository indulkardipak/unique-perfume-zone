import { Product } from "@/types/product";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({
  product,
}: ProductDetailsProps) {
  return (
    <div className="space-y-14">
      <section className="grid items-start gap-10 lg:grid-cols-[480px_minmax(0,1fr)] xl:gap-16">
        <ProductGallery product={product} />

        <div className="min-w-0">
          <ProductInfo product={product} />
        </div>
      </section>

      <section>
        <ProductTabs product={product} />
      </section>
    </div>
  );
}