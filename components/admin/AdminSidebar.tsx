import Link from "next/link";

const menuItems = [
  { name: "Dashboard", href: "/admin" },
  { name: "Products", href: "/admin/products" },
  { name: "Add Product", href: "/admin/products/add" },
  { name: "Orders", href: "/admin/orders" },
  { name: "Customers", href: "/admin/customers" },
  { name: "Categories", href: "/admin/categories" },
];

export default function AdminSidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-zinc-800 min-h-screen p-6">
      <h2 className="text-2xl font-bold text-yellow-400 mb-8">
        Unique Perfume
      </h2>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-3 text-zinc-300 hover:bg-zinc-800 hover:text-white transition"
          >
            {item.name}
          </Link>
        ))}
      </nav>

    </aside>
  );
}