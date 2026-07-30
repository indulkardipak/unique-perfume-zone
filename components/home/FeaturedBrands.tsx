import Image from "next/image";
import Link from "next/link";

const brands = [
  {
    name: "Ajmal",
    image: "/images/brands/ajmal.png",
    slug: "ajmal",
  },
  {
    name: "Lattafa",
    image: "/images/brands/lattafa.png",
    slug: "lattafa",
  },
  {
    name: "Armaf",
    image: "/images/brands/armaf.png",
    slug: "armaf",
  },
  {
    name: "Rasasi",
    image: "/images/brands/rasasi.png",
    slug: "rasasi",
  },
  {
    name: "Afnan",
    image: "/images/brands/afnan.png",
    slug: "afnan",
  },
  {
    name: "Ahmed",
    image: "/images/brands/ahmed.png",
    slug: "ahmed",
  },
];

export default function FeaturedBrands() {
  return (
    <section className="bg-black py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-yellow-400">
            Premium Collection
          </p>

          <h2 className="mt-3 text-4xl font-bold text-white">
            Shop By Brands
          </h2>

          <p className="mt-4 text-zinc-400">
            Discover authentic fragrances from the world's most trusted perfume brands.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6 transition duration-300 hover:border-yellow-500 hover:-translate-y-2"
            >
              <div className="flex h-24 items-center justify-center">
                <Image
                  src={brand.image}
                  alt={brand.name}
                  width={90}
                  height={90}
                  className="object-contain transition duration-300 group-hover:scale-110"
                />
              </div>

              <h3 className="mt-4 text-center font-semibold text-white">
                {brand.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}