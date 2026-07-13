import type { Metadata } from "next";
import { Providers } from "@/context";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";


export const metadata: Metadata = {
  title: "DevLaunch | Learn. Build. Launch.",
  description: "A modern online learning platform built with Next.js and TypeScript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          {children}
          <Footer />
          </Providers>
      </body>
    </html>
  );
}