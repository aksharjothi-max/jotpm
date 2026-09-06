import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "JotPM — Akshar Jothi | Product Management & Growth Strategy",
  description: "Product management insights, growth strategy frameworks, and lessons from the trenches of building products that matter.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          background: "#F8FAFC",
          color: "#1D1D1F",
          fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
          WebkitFontSmoothing: "antialiased",
          margin: 0,
        }}
      >
        <GoogleAnalytics />
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
