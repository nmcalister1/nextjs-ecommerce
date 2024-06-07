import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "@/components/AppHeader";
import AppFooter from "@/components/AppFooter";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "New Wave - Mens Dress Clothes",
  description: "Get stylish mens dress clothes at an affordable price.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} text-sm text-gray-900 bg-[#E5E8EC] flex flex-col mx-auto min-h-screen`}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
