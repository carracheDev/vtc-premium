import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Maison Élan | Chauffeur privé à Paris",
  description: "Maison Élan, service de chauffeur privé premium à Paris et en Île-de-France.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
