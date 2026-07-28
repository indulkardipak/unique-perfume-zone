import AdminHeader from "@/components/admin/AdminHeader";
import AdminSidebar from "@/components/admin/AdminSidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-black">
      <AdminSidebar />

      <div className="flex-1">
        <AdminHeader />

        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  );
}