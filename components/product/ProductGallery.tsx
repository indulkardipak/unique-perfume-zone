import Image from "next/image";
import { Product } from "@/types/product";

interface Props {
  product: Product;
}

export default function ProductGallery({ product }: Props) {
  return (
    <div className="sticky top-24">
      <div className="rounded-3xl border border-zinc-800 bg-white p-8 shadow-lg">
        <div className="overflow-hidden rounded-2xl">
          <Image
            src={product.image}
            alt={product.name}
            width={500}
            height={500}
            priority
            unoptimized
            className="mx-auto h-[380px] w-auto object-contain transition-transform duration-500 hover:scale-110"
          />
        </div>

        {/* Thumbnail (future multiple images support) */}
        <div className="mt-6 flex justify-center">
          <button className="rounded-xl border-2 border-red-500 p-2 transition hover:border-red-600">
            <Image
              src={product.image}
              alt={product.name}
              width={70}
              height={70}
              unoptimized
              className="h-16 w-16 object-contain"
            />
          </button>
        </div>
      </div>
    </div>
  );
}