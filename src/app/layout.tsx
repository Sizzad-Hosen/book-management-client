import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import Providers from "./Providers";
import { Toaster } from "react-hot-toast";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "BookSwap | Exchange Your Books",
  description: "A platform to buy, sell, and exchange books with others.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased bg-gray-50 text-gray-900">
<Providers>


        <Navbar></Navbar>
        <main>
          
          {children}
    <Toaster position="top-right" reverseOrder={false} />
        </main>
        <Footer></Footer>

</Providers>
      </body>
    </html>
  );
}
