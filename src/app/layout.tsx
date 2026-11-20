import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { site } from "@/content/site";
import "./globals.css";

// Self-hosted variable fonts (OFL licensed, from Fontsource) – no Google Fonts request at runtime.
const inter = localFont({
  src: "./fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});
const jakarta = localFont({
  src: "./fonts/plus-jakarta-sans.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} – Dental Clinic (Concept)`,
  description: site.description,
  openGraph: {
    title: `${site.name} – ${site.tagline}`,
    description: site.description,
    type: "website",
  },
  robots: { index: false, follow: false }, // concept project: keep out of search results
};

export const viewport: Viewport = {
  themeColor: "#0f766e",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} antialiased`}>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
