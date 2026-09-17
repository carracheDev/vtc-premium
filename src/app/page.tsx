import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock3, ShieldCheck, Sparkles } from "lucide-react";
import { CTA } from "@/components/home/CTA";
import { Hero } from "@/components/home/Hero";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Chauffeur privé premium à Paris",
  description:
    "Prestige VTC propose un chauffeur privé premium à Paris et en Île-de-France pour les transferts aéroport, déplacements professionnels et trajets sur mesure.",
  alternates: { canonical: "/" },
  keywords: [
    "chauffeur privé Paris",
    "VTC Paris",
    "chauffeur privé aéroport",
    "transfert aéroport Paris",
    "déplacement professionnel Paris",
  ],
};

const advantages = [
  "Chauffeur professionnel et ponctuel",
  "Véhicule confortable et soigneusement entretenu",
  "Réservation simple et confirmation rapide",
  "Service disponible sur réservation",
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Prestige VTC",
    image: "https://www.prestige-vtc.fr/og-image.svg",
    description:
      "Service de chauffeur privé premium à Paris et en Île-de-France pour les transferts aéroport, déplacements professionnels et trajets sur mesure.",
    areaServed: ["Paris", "Île-de-France", "Aéroport Charles de Gaulle", "Aéroport Orly"],
    serviceType: ["Chauffeur privé", "Transfert aéroport", "Déplacements professionnels"],
    telephone: "+33 1 00 00 00 00",
    priceRange: "€€€",
    url: "https://www.prestige-vtc.fr/",
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Hero />

      <Section className="bg-[var(--paper)]">
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">L&apos;expérience Prestige</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              Plus qu&apos;un trajet.<br />
              <em className="text-[var(--gold)]">Une attention.</em>
            </h2>
          </div>

          <div className="max-w-xl">
            <p className="text-base leading-8 text-black/60">
              Chaque déplacement est préparé dans les moindres détails. Ponctualité, discrétion et confort deviennent les bases d&apos;un service qui vous laisse le temps de vous concentrer sur l&apos;essentiel.
            </p>
            <Link href="/services" className="mt-8 inline-flex items-center gap-3 border-b border-[var(--gold)] pb-2 text-xs font-semibold text-black hover:text-[var(--gold)]">
              Découvrir notre approche <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Container>
      </Section>

      <ServicesPreview />

      <Section className="bg-[var(--paper)]">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Pourquoi Prestige VTC</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              La qualité dans<br />
              <em className="text-[var(--gold)]">chaque détail.</em>
            </h2>
            <p className="mt-7 max-w-lg text-base leading-8 text-black/60">
              Un service premium ne se résume pas à un véhicule. Il se reconnaît à l&apos;anticipation, à la présence juste et à la tranquillité d&apos;esprit offerte à chaque passager.
            </p>
            <ul className="mt-8 grid gap-4">
              {advantages.map((advantage) => (
                <li key={advantage} className="flex items-center gap-3 text-sm text-black/70">
                  <span className="grid size-6 shrink-0 place-items-center rounded-full border border-[var(--gold)] text-[var(--gold)]">
                    <Check size={13} aria-hidden="true" />
                  </span>
                  {advantage}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative min-h-[26rem] overflow-hidden border border-black/10 bg-white p-8 sm:p-12">
            <div className="absolute inset-0">
              <Image
                src="/images/chauffeur-professionnel.webp"
                alt="Chauffeur professionnel devant une berline haut de gamme"
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="relative z-10 max-w-xs rounded-[1.5rem] border border-white/30 bg-black/55 p-5 text-white backdrop-blur-sm">
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-[var(--gold-light)]">Paris comme point de départ</p>
              <h3 className="mt-4 text-2xl font-medium">Votre destination, notre affaire.</h3>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--ink)] text-white">
        <Container className="grid gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Réservation</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              Un seul message pour<br />
              <em className="text-[var(--gold-light)]">un trajet pensé.</em>
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
              <Sparkles className="text-[var(--gold-light)]" size={18} aria-hidden="true" />
              <p className="mt-4 text-2xl font-medium">1</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Contactez-nous</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
              <Clock3 className="text-[var(--gold-light)]" size={18} aria-hidden="true" />
              <p className="mt-4 text-2xl font-medium">2</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Recevez votre devis</p>
            </div>
            <div className="rounded-[1.5rem] border border-white/10 bg-white/4 p-5">
              <ShieldCheck className="text-[var(--gold-light)]" size={18} aria-hidden="true" />
              <p className="mt-4 text-2xl font-medium">3</p>
              <p className="mt-2 text-sm leading-6 text-white/70">Profitez du trajet</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--paper)]">
        <Container className="flex flex-col items-center justify-center gap-6 py-8 text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Zones d&apos;intervention</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Paris, aéroports, gares et trajets premium</h2>
          <Button href="/zone-intervention" tone="dark">
            Voir les zones <ArrowRight size={15} aria-hidden="true" />
          </Button>
        </Container>
      </Section>

      <CTA />
    </main>
  );
}
