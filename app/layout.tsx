import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import SiteFooter from "@/components/SiteFooter";
import SiteNav from "@/components/SiteNav";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "UBC BizChina",
    template: "%s · UBC BizChina",
  },
  description:
    "UBC BizChina connects students with China's business landscape through events, mentorship, and storytelling.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${manrope.variable}`}>
      <body className="min-h-dvh">
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
