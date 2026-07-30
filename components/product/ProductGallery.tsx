import Image from "next/image";

interface Props {
  product: any;
}

export default function ProductGallery({ product }: Props) {
  return (
    <div className="sticky top-24">

      <div className="rounded-3xl border border-zinc-800 bg-white p-10 shadow-lg">

        <Image
          src={product.image}
          alt={product.name}
          width={450}
          height={450}
          priority
          unoptimized
          className="mx-auto h-[420px] w-auto object-contain transition duration-300 hover:scale-105"
        />

      </div>

    </div>
  );
}