import type { Metadata, Viewport } from "next";
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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.prestige-vtc.fr";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Prestige VTC",
  authors: [{ name: "Prestige VTC" }],
  creator: "Prestige VTC",
  publisher: "Prestige VTC",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  keywords: [
    "chauffeur privé Paris",
    "VTC Paris",
    "chauffeur privé aéroport",
    "transfert aéroport Paris",
    "déplacement professionnel Paris",
    "prestige VTC",
    "chauffeur privé Île-de-France",
    "reservation VTC Paris",
    "service VTC premium",
  ],
  title: { default: "Prestige VTC | Chauffeur privé premium à Paris", template: "%s | Prestige VTC" },
  description:
    "Prestige VTC propose un service de chauffeur privé premium à Paris et en Île-de-France : transferts aéroport, déplacements professionnels, trajets privés et mise à disposition.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Prestige VTC",
    title: "Prestige VTC | Chauffeur privé premium à Paris",
    description:
      "Service premium de chauffeur privé à Paris, en Île-de-France et pour vos transferts aéroport et déplacements professionnels.",
    url: siteUrl,
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Prestige VTC - Chauffeur privé premium à Paris" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Prestige VTC | Chauffeur privé premium à Paris",
    description:
      "Service premium de chauffeur privé à Paris et en Île-de-France pour vos transferts, trajets professionnels et voyages sur mesure.",
    images: ["/og-image.svg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#080808",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={poppins.variable}>
      <body>
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-[var(--gold)] focus:px-4 focus:py-3 focus:text-sm focus:text-[var(--ink)]"
        >
          Aller au contenu
        </a>
        <Header />
        <div id="contenu">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
