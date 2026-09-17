import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CalendarDays, Car, Check, Plane, TrainFront, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Services de chauffeur privé premium",
  description:
    "Prestige VTC propose des services de chauffeur privé premium à Paris : transfert aéroport, déplacement professionnel, trajets privés, mise à disposition et longue distance.",
  alternates: { canonical: "/services" },
  keywords: [
    "transfert aéroport Paris",
    "chauffeur privé aéroport",
    "VTC gare Paris",
    "déplacement professionnel Paris",
    "mise à disposition chauffeur",
    "trajet privé Paris",
  ],
};

const services = [
  { icon: Plane, image: "/1.png", alt: "Chauffeur professionnel devant une berline devant un hôtel", title: "Transferts aéroport", subtitle: "Paris · Aéroports", text: "Voyagez sereinement entre Paris et les principaux aéroports d’Île-de-France, avec une prise en charge préparée.", features: ["Prise en charge ponctuelle", "Aide avec les bagages"] },
  { icon: TrainFront, image: "/4.png", alt: "Chauffeur ouvrant une berline dans une rue élégante", title: "Transferts gares", subtitle: "Paris · Grandes gares", text: "Rejoignez ou quittez les principales gares parisiennes sans stress ni perte de temps.", features: ["Gare du Nord et Gare de Lyon", "Montparnasse et Saint-Lazare"] },
  { icon: BriefcaseBusiness, image: "/images/business-travel.webp", alt: "Voyageur en déplacement professionnel près d’une voiture de prestige", title: "Déplacements professionnels", subtitle: "Business · Corporate", text: "Une solution discrète et fiable pour vos rendez-vous, réunions et journées professionnelles.", features: ["Ponctualité prioritaire", "Service discret"] },
  { icon: Users, image: "/5.png", alt: "Berline noire haut de gamme dans un environnement urbain", title: "Mise à disposition", subtitle: "Sur mesure", text: "Votre chauffeur reste à votre disposition pendant plusieurs heures selon votre programme.", features: ["Durée flexible", "Chauffeur dédié"] },
  { icon: Car, image: "/5.png", alt: "Berline de prestige pour un trajet privé", title: "Trajets privés", subtitle: "Confort · Sérénité", text: "Pour un dîner, un événement ou un week-end, profitez d’un trajet pensé autour de votre rythme.", features: ["Itinéraire personnalisé", "Service sur réservation"] },
  { icon: CalendarDays, image: "/3.png", alt: "Berline de prestige dans une ville illuminée de nuit", title: "Longue distance", subtitle: "France · Sur demande", text: "Des trajets personnalisés au-delà de l’Île-de-France, préparés avec le même niveau d’attention.", features: ["Départ depuis Paris", "Organisation en amont"] },
];

export default function ServicesPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Services de chauffeur privé Prestige VTC",
    provider: { "@type": "LocalBusiness", name: "Prestige VTC" },
    areaServed: ["Paris", "Île-de-France"],
    serviceType: ["Transfert aéroport", "Déplacement professionnel", "Trajet privé", "Mise à disposition", "Longue distance"],
    description:
      "Prestige VTC propose des services premium de chauffeur privé à Paris et en Île-de-France, pour les voyages d’affaires, les transferts aéroport et les trajets privés.",
  };

  return (
    <main className="bg-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Nos services</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Le confort<br />
            <em className="text-[var(--gold-light)]">à votre mesure.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Des solutions de transport pensées pour vos déplacements privés, professionnels et vos transferts longue distance.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Notre approche</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              Chaque trajet<br />
              <em className="text-[var(--gold)]">est différent.</em>
            </h2>
          </div>
          <div>
            <p className="max-w-xl text-base leading-8 text-black/60">
              Nous adaptons notre service à votre horaire, votre destination et votre besoin de confort. La demande est préparée avec vous, sans promesse automatisée ni information inventée.
            </p>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3 text-xs font-semibold text-black/65">
              <span className="flex items-center gap-2"><Check size={16} className="text-[var(--gold)]" aria-hidden="true" />Ponctualité</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-[var(--gold)]" aria-hidden="true" />Confort</span>
              <span className="flex items-center gap-2"><Check size={16} className="text-[var(--gold)]" aria-hidden="true" />Attention</span>
            </div>
          </div>
        </Container>
      </Section>

      <section className="border-y border-black/10">
        <Container>
          {services.map(({ icon: Icon, image, alt, title, subtitle, text, features }, index) => (
            <article key={title} className="grid gap-7 border-b border-black/10 py-12 last:border-0 md:grid-cols-[4rem_11rem_1fr_auto] md:items-start md:gap-8">
              <div className="flex items-center gap-2 text-[var(--gold)]">
                <span className="text-xs tracking-[0.15em]">0{index + 1}</span>
                <Icon size={18} aria-hidden="true" />
              </div>

              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={image} alt={alt} fill sizes="(min-width: 768px) 176px, 100vw" className="object-cover" />
              </div>

              <div className="md:pt-1">
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">{subtitle}</p>
                <h3 className="mt-3 text-2xl font-medium text-black">{title}</h3>
              </div>

              <div className="max-w-xl">
                <p className="text-base leading-8 text-black/60">{text}</p>
                <ul className="mt-5 space-y-2 text-sm text-black/70">
                  {features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check size={15} className="text-[var(--gold)]" aria-hidden="true" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 self-center rounded-full border border-black/10 bg-white px-5 py-3 text-sm font-medium text-black transition-colors hover:border-[var(--gold)] hover:text-[var(--gold)]"
              >
                Demander un devis <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </Container>
      </section>

      <Section className="bg-[var(--paper)]">
        <Container className="grid gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Service premium</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              Une organisation claire<br />
              <em className="text-[var(--gold)]">pour un trajet sans stress.</em>
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_16px_60px_rgba(8,8,8,0.04)]">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">01</p>
              <p className="mt-4 text-xl font-medium text-black">Renseignement</p>
              <p className="mt-2 text-sm leading-6 text-black/60">Nous comprenons votre besoin, votre horaire et votre destination.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_16px_60px_rgba(8,8,8,0.04)]">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">02</p>
              <p className="mt-4 text-xl font-medium text-black">Préparation</p>
              <p className="mt-2 text-sm leading-6 text-black/60">Nous organisons le trajet avec précision et qualité de service.</p>
            </div>
            <div className="rounded-[1.5rem] border border-black/10 bg-white p-5 shadow-[0_16px_60px_rgba(8,8,8,0.04)]">
              <p className="text-xs uppercase tracking-[0.16em] text-[var(--gold)]">03</p>
              <p className="mt-4 text-xl font-medium text-black">Livraison</p>
              <p className="mt-2 text-sm leading-6 text-black/60">Votre chauffeur est là à l’heure, avec un service discret et confortable.</p>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="bg-[var(--ink)] text-white">
        <Container className="flex flex-col items-center justify-center gap-6 py-8 text-center">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Demande de devis</p>
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">Un itinéraire pensé pour votre mission</h2>
          <Button href="/contact" tone="gold">Réserver mon trajet <ArrowRight size={15} aria-hidden="true" /></Button>
        </Container>
      </Section>
    </main>
  );
}
