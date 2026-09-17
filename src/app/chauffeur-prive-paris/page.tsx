import { ArrowRight, BriefcaseBusiness, Clock3, Plane, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Chauffeur privé Paris | VTC premium",
  description:
    "Chauffeur privé Paris premium pour transfert aéroport, déplacement professionnel et trajet sur mesure. Service VTC discret, ponctuel et confortable.",
  alternates: { canonical: "/chauffeur-prive-paris" },
  keywords: [
    "chauffeur privé Paris",
    "VTC Paris premium",
    "chauffeur privé aéroport Paris",
    "transfert aéroport Paris",
    "déplacement professionnel Paris",
  ],
};

const highlights = [
  { icon: Plane, title: "Transferts aéroport", text: "Accueil à l’heure, gestion du bagage et trajet jusqu’au terminal ou jusqu’au centre-ville." },
  { icon: BriefcaseBusiness, title: "Déplacements pro", text: "Service discret et fiable pour les rendez-vous, prises en charge et déplacements d’affaires." },
  { icon: Clock3, title: "Ponctualité", text: "Contrôle de l’itinéraire et anticipation pour un départ ou une arrivée toujours dans les temps." },
  { icon: ShieldCheck, title: "Confort premium", text: "Véhicule soigné, trajets fluides et expérience personnalisée selon votre planning." },
];

export default function ChauffeurPriveParisPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Chauffeur privé Paris Prestige VTC",
    provider: { "@type": "LocalBusiness", name: "Prestige VTC" },
    areaServed: "Paris",
    serviceType: ["Chauffeur privé", "Transfert aéroport", "Déplacement professionnel"],
    description:
      "Service premium de chauffeur privé à Paris pour les transferts aéroport, les déplacements professionnels et les trajets privés.",
    url: "https://vtc-premium-seven.vercel.app/chauffeur-prive-paris",
  };

  return (
    <main className="bg-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Paris</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Chauffeur privé<br />
            <em className="text-[var(--gold-light)]">à Paris.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Un service de VTC premium pour vos déplacements privés, professionnels et vos transferts aéroport avec ponctualité et confort.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" tone="gold">Réserver mon trajet <ArrowRight size={15} aria-hidden="true" /></Button>
            <Button href="/zone-intervention" tone="dark">Voir les zones <ArrowRight size={15} aria-hidden="true" /></Button>
          </div>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Pourquoi choisir ce service</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-6xl">
              Une présence<br />
              <em className="text-[var(--gold)]">au service de votre temps.</em>
            </h2>
          </div>
          <div className="max-w-xl text-base leading-8 text-black/60">
            <p>
              Pour les déplacements à Paris, le vrai confort ne se résume pas à un véhicule premium. Il s’agit d’une organisation fiable, d’un chauffeur ponctuel et d’une expérience pensée pour vous accueillir sereinement.
            </p>
            <p className="mt-5">
              Que vous voyagiez pour un rendez-vous d’affaires, un vol en partance ou un trajet privé, nous adaptons chaque détail à votre planning.
            </p>
          </div>
        </Container>
      </Section>

      <Section className="bg-white">
        <Container className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[1.5rem] border border-black/10 bg-[var(--paper)] p-6">
              <span className="grid size-12 place-items-center rounded-full bg-white text-[var(--gold)] shadow-sm ring-1 ring-black/5">
                <Icon size={18} aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-medium text-black">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/60">{text}</p>
            </article>
          ))}
        </Container>
      </Section>

      <Section>
        <Container className="rounded-[2rem] border border-black/10 bg-white p-8 shadow-[0_16px_60px_rgba(8,8,8,0.04)] sm:p-12">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Service local</p>
          <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">Chauffeur privé Paris pour tous vos trajets</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div><strong className="block text-xl font-medium text-black">Aéroport</strong><p className="mt-2 text-sm leading-7 text-black/60">Trajets vers CDG, Orly et autres destinations aéroportuaires.</p></div>
            <div><strong className="block text-xl font-medium text-black">Business</strong><p className="mt-2 text-sm leading-7 text-black/60">Déplacements personnels et professionnels avec discrétion et ponctualité.</p></div>
            <div><strong className="block text-xl font-medium text-black">Privé</strong><p className="mt-2 text-sm leading-7 text-black/60">Sorties, dîners, événements et trajets sur mesure selon votre rythme.</p></div>
          </div>
          <div className="mt-10">
            <Button href="/contact">Demander un devis <ArrowRight size={15} aria-hidden="true" /></Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
