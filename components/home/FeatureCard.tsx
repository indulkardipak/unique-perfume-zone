type FeatureCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function FeatureCard({
  title,
  description,
  icon,
}: FeatureCardProps) {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400">

      <div className="text-5xl">{icon}</div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-zinc-400 leading-7">
        {description}
      </p>

    </div>
  );
}