import Link from "next/link";
import { heroContent } from "@/lib/hero";
import Image from "next/image";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className="bg-black">
      <div className="mx-auto grid min-h-[85vh] max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Section */}
        <div>
          <span className="inline-block rounded-full border border-yellow-500/30 px-4 py-2 text-sm font-medium text-yellow-400">
            {heroContent.badge}
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            {heroContent.title.first}

            <span className="mt-2 block text-yellow-400">
              {heroContent.title.second}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            {heroContent.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-yellow-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-yellow-400"
            >
              Shop Now
            </Link>

            <Link
              href="/brands"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Explore Collection
            </Link>

            <HeroStats />
          </div>
        </div>

        {/* Right Section */}
<div className="relative flex items-center justify-center">

  {/* Gold Glow */}
  <div className="absolute h-72 w-72 rounded-full bg-yellow-500/20 blur-3xl"></div>

  {/* Glass Card */}
  <div className="relative rounded-[40px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

    <Image
  src="/images/hero-perfume.png"
  alt="Luxury Perfume"
  width={380}
  height={500}
  priority
  className="animate-[float_5s_ease-in-out_infinite] object-contain drop-shadow-[0_25px_60px_rgba(255,215,0,0.35)]"
/>

  </div>

</div>

      </div>
    </section>
  );
}