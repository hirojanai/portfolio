import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import ScrollToTopOnLoad from "./components/navigation/ScrollToTopOnLoad";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  title: "Gjher Shervine Pahati | Portfolio",
  description: "Software engineer portfolio — projects and experience.",
  ...(siteUrl && { metadataBase: new URL(siteUrl) }),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased pb-24 sm:pb-28`}
      >
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
