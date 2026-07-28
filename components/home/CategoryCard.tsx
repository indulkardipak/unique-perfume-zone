type CategoryCardProps = {
  name: string;
  description: string;
  emoji: string;
};

export default function CategoryCard({
  name,
  description,
  emoji,
}: CategoryCardProps) {
  return (
    <div className="group rounded-3xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400">

      <div className="text-4xl">
        {emoji}
      </div>

      <h3 className="mt-5 text-2xl font-bold text-white">
        {name}
      </h3>

      <p className="mt-2 text-zinc-400">
        {description}
      </p>

      <button className="mt-6 text-sm font-semibold text-yellow-400">
        Explore →
      </button>

    </div>
  );
}