import Navbar from "@/components/layout/Navbar";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-black text-white">
        {children}
      </main>
    </>
  );
}