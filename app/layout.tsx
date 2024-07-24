import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NextAuthProvider } from "./providers";

const robotoSerif = Roboto_Serif({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Property pulse",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={robotoSerif.className}>
        <NextAuthProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextAuthProvider>
      </body>
    </html>
  );
}
