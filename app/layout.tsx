import type { Metadata } from "next";
import "./globals.css";
import { personal } from "./data";

export const metadata: Metadata = {
  title: `${personal.name} — ${personal.title}`,
  description: personal.bio,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#0f0f0f] text-gray-100 antialiased">{children}</body>
    </html>
  );
}
