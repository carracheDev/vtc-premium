import Link from "next/link";
import { ArrowRight, Building2, CarFront, Check, MapPin, Plane, TrainFront } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Zone d’intervention chauffeur privé Paris et Île-de-France",
  description:
    "Prestige VTC vous accompagne à Paris, en proche couronne, vers les aéroports, les gares et sur les trajets longue distance en Île-de-France.",
  alternates: { canonical: "/zone-intervention" },
  keywords: [
    "chauffeur privé Paris",
    "VTC Île-de-France",
    "chauffeur aéroport Paris",
    "transfert gare Paris",
    "chauffeur privé Versailles",
  ],
};

const zones = [
  { name: "Paris", href: "/chauffeur-prive-paris" },
  { name: "Boulogne-Billancourt", href: "/chauffeur-prive-boulogne-billancourt" },
  { name: "Neuilly-sur-Seine", href: "/chauffeur-prive-neuilly-sur-seine" },
  { name: "Levallois-Perret", href: "/zone-intervention" },
  { name: "Saint-Denis", href: "/chauffeur-prive-saint-denis" },
  { name: "Versailles", href: "/chauffeur-prive-versailles" },
];
const destinations = [
  [Plane, "Aéroports", "Charles-de-Gaulle, Orly et autres destinations aéroportuaires sur réservation."],
  [TrainFront, "Gares", "Les principales gares parisiennes et franciliennes, avec prise en charge sur rendez-vous."],
  [Building2, "Destinations privées", "Hôtels, résidences, entreprises et lieux événementiels en Île-de-France."],
  [CarFront, "Longue distance", "Des trajets personnalisés au-delà de l’Île-de-France sur réservation préalable."],
] as const;

export default function ZoneInterventionPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Place",
    name: "Zone d’intervention Prestige VTC",
    description: "Service de chauffeur privé premium à Paris, en Île-de-France et vers les aéroports et gares françaises.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressRegion: "Île-de-France",
      addressCountry: "FR",
    },
    areaServed: ["Paris", "Boulogne-Billancourt", "Neuilly-sur-Seine", "Levallois-Perret", "Saint-Denis", "Versailles"],
  };

  return (
    <main className="bg-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Zone d’intervention</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Paris &amp;<br />
            <em className="text-[var(--gold-light)]">Île-de-France.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Prestige VTC vous accompagne à Paris et dans les principales communes d’Île-de-France, pour vos trajets privés comme professionnels.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Une couverture locale</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              Où que vous soyez,<br />
              <em className="text-[var(--gold)]">nous venons à vous.</em>
            </h2>
          </div>
          <div className="max-w-xl text-base leading-8 text-black/60">
            <p>
              Notre service de chauffeur privé couvre Paris et sa proche couronne. Nous assurons également les transferts vers les aéroports, les gares et différentes destinations en Île-de-France sur réservation.
            </p>
            <p className="mt-5">Pour un trajet spécifique, communiquez-nous votre adresse de départ et votre destination.</p>
          </div>
        </Container>
      </Section>

      <section className="bg-white py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-5 border-b border-black/10 pb-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Principales zones</p>
              <h2 className="mt-4 font-display text-4xl sm:text-6xl">
                Nos destinations<br />
                <em className="text-[var(--gold)]">habituelles.</em>
              </h2>
            </div>
            <span className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] text-[var(--gold)]">
              <MapPin size={16} aria-hidden="true" />PARIS · FRANCE
            </span>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {zones.map((zone) => (
              <Link key={zone.name} href={zone.href} className="rounded-[1.5rem] border border-black/10 bg-[var(--paper)] p-5 transition-colors hover:border-[var(--gold)] hover:bg-white">
                <p className="text-lg font-medium text-black">{zone.name}</p>
                <p className="mt-2 text-sm text-black/55">Service VTC disponible sur réservation.</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section className="bg-[var(--paper)]">
        <Container className="grid gap-10 lg:grid-cols-2">
          {destinations.map(([Icon, title, text]) => (
            <div key={title} className="rounded-[1.75rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(8,8,8,0.04)]">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-full bg-[var(--paper)] text-[var(--gold)]">
                  <Icon size={19} aria-hidden="true" />
                </span>
                <h3 className="text-2xl font-medium text-black">{title}</h3>
              </div>
              <p className="mt-5 text-base leading-7 text-black/60">{text}</p>
              <div className="mt-6 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--gold)]">
                <Check size={15} aria-hidden="true" />Disponible
              </div>
            </div>
          ))}
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="rounded-[2rem] border border-black/10 bg-white p-8 text-center shadow-[0_16px_60px_rgba(8,8,8,0.04)]">
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Demande spécifique</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Besoin d&apos;un trajet hors zone habituelle ?</h2>
            <Button href="/contact" className="mt-7">
              Réserver mon trajet <ArrowRight size={15} aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
