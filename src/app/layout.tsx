import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/context";
import { Toaster } from "react-hot-toast";


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
          <Toaster
            position="top-right"
            reverseOrder={false}
          />

        </Providers>
      </body>
    </html>
  );
}