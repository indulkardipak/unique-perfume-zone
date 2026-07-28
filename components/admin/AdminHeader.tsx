export default function AdminHeader() {
  return (
    <header className="flex items-center justify-between border-b border-zinc-800 bg-zinc-900 px-8 py-4">
      <h1 className="text-xl font-semibold text-white">
        Admin Panel
      </h1>

      <div className="text-sm text-zinc-400">
        Welcome, Admin
      </div>
    </header>
  );
}