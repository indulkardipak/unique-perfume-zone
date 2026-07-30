import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";
import ProductTabs from "./ProductTabs";

interface Props {
  product: any;
}

export default function ProductDetails({ product }: Props) {
  return (
    <div className="space-y-12">

      <div className="grid items-start gap-14 lg:grid-cols-[520px_1fr]">

        <ProductGallery product={product} />

        <ProductInfo product={product} />

      </div>

      <ProductTabs product={product} />

    </div>
  );
}