import { Star, ShieldCheck, Truck } from "lucide-react";

export default function HeroStats() {
  return (
    <div className="mt-12 flex flex-wrap gap-5">

      <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
        <Star className="text-yellow-400" size={22} />
        <div>
          <h4 className="text-sm font-semibold text-white">
            4.9/5 Rating
          </h4>
          <p className="text-xs text-zinc-400">
            Trusted by customers
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
        <Truck className="text-yellow-400" size={22} />
        <div>
          <h4 className="text-sm font-semibold text-white">
            Free Shipping
          </h4>
          <p className="text-xs text-zinc-400">
            On eligible orders
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/60 px-5 py-4">
        <ShieldCheck className="text-yellow-400" size={22} />
        <div>
          <h4 className="text-sm font-semibold text-white">
            100% Authentic
          </h4>
          <p className="text-xs text-zinc-400">
            Genuine fragrances
          </p>
        </div>
      </div>

    </div>
  );
}