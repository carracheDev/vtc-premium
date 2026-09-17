import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Prestige VTC | Chauffeur privé à Paris", template: "%s | Prestige VTC" },
  description: "Service de chauffeur privé premium à Paris et en Île-de-France pour vos transferts, déplacements professionnels et trajets sur mesure.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", locale: "fr_FR", siteName: "Prestige VTC", title: "Prestige VTC | Chauffeur privé à Paris", description: "Un service de chauffeur privé premium à Paris et en Île-de-France." },
  twitter: { card: "summary_large_image", title: "Prestige VTC | Chauffeur privé à Paris", description: "Un service de chauffeur privé premium à Paris et en Île-de-France." },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="fr" className={poppins.variable}><body><a href="#contenu" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--gold)] focus:px-4 focus:py-3 focus:text-sm focus:text-[var(--ink)]">Aller au contenu</a><Header /><div id="contenu">{children}</div><Footer /></body></html>;
}
