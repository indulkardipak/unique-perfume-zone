import { features } from "@/lib/features";
import FeatureCard from "./FeatureCard";

export default function WhyChooseUs() {
  return (
    <section className="bg-black py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <p className="text-yellow-400 font-semibold uppercase tracking-widest">
            Why Choose Us
          </p>

          <h2 className="mt-4 text-4xl font-bold text-white">
            Premium Shopping Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-zinc-400">
            We bring authentic luxury fragrances with fast delivery,
            secure payments and excellent customer support.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}

        </div>

      </div>

    </section>
  );
}