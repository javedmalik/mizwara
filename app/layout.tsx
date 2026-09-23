import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { SiteShell } from "@/components/site-shell";
import "./globals.css";
const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});
export const metadata: Metadata = {
  title: {
    default: "Mizavara Global | Quality Products, Global Reach",
    template: "%s | Mizavara Global",
  },
  description:
    "Mizavara Global supplies agricultural products, spices, makhana, grains, herbal products, food and personal-care products for domestic and international markets.",
  keywords: [
    "agricultural products exporter",
    "Indian spices",
    "makhana supplier",
    "grains exporter",
    "herbal products",
    "Mizavara Global",
  ],
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${manrope.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
