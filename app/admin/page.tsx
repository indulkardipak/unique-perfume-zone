export default function AdminDashboard() {
  const stats = [
    {
      title: "Total Products",
      value: "0",
    },
    {
      title: "Total Orders",
      value: "0",
    },
    {
      title: "Revenue",
      value: "₹0",
    },
    {
      title: "Customers",
      value: "0",
    },
  ];

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold text-white">
        Dashboard
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
          >
            <p className="text-sm text-zinc-400">
              {stat.title}
            </p>

            <h2 className="mt-3 text-4xl font-bold text-white">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}