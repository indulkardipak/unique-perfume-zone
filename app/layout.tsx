import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unique Perfume Zone",
  description: "Premium Perfume Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}