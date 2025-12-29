import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Infinity System Solution - End-to-End IT Services",
    template: "%s | Infinity System Solution",
  },
  description:
    "Your all-in-one IT Service Provider. From CCTV installation to hardware sales and repair services. 100% customer satisfaction guaranteed.",
  keywords: [
    "IT services",
    "CCTV installation",
    "hardware sales",
    "computer repair",
    "network security",
    "data recovery",
  ],
  authors: [{ name: "Infinity System Solution" }],
  openGraph: {
    title: "Infinity System Solution - End-to-End IT Services",
    description:
      "Your all-in-one IT Service Provider. 100% customer satisfaction guaranteed.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-foreground font-sans overflow-x-hidden antialiased min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
