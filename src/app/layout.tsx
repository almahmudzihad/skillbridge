import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/Footer";
import { Providers } from "@/context";
import { Toaster } from "react-hot-toast";


export const metadata: Metadata = {
   title: {
    default: "DevLaunch | Online Learning Platform",
    template: "%s | DevLaunch",
  },
  description:
    "DevLaunch is a modern online learning platform where students can explore, enroll, and manage programming courses.",

  keywords: [
    "DevLaunch",
    "Online Learning",
    "Programming Courses",
    "Web Development",
    "React",
    "Next.js",
    "JavaScript",
    "Frontend",
    "Backend",
  ],

  authors: [
    {
      name: "Al Mahmud Zihad",
    },
  ],

  creator: "Al Mahmud Zihad",

  openGraph: {
    title: "DevLaunch | Online Learning Platform",
    description:
      "Learn modern web development with DevLaunch through practical and interactive courses.",
    type: "website",
    locale: "en_US",
  },

  robots: {
    index: true,
    follow: true,
  },
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