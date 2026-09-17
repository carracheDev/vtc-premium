import { ArrowRight, MapPinned, Plane, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Chauffeur privé Boulogne-Billancourt | VTC premium",
  description:
    "Service de chauffeur privé Boulogne-Billancourt pour les déplacements professionnels, les trajets vers Paris et les transferts aéroport.",
  alternates: { canonical: "/chauffeur-prive-boulogne-billancourt" },
  keywords: ["chauffeur privé Boulogne-Billancourt", "VTC Boulogne", "chauffeur privé Hauts-de-Seine", "transfert aéroport Boulogne"],
};

const details = [
  { icon: Plane, title: "Aéroport", text: "Aller directement vers CDG ou Orly dans des conditions de confort et de ponctualité." },
  { icon: Users, title: "Trajets privés", text: "Des trajets personnalisés pour votre famille, vos événements ou vos déplacements quotidiens." },
  { icon: MapPinned, title: "Couverture locale", text: "Service sur la commune et vers les principales zones de l’Île-de-France." },
];

export default function ChauffeurPriveBoulognePage() {
  return (
    <main className="bg-[var(--paper)]">
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Boulogne-Billancourt</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Chauffeur privé<br />
            <em className="text-[var(--gold-light)]">Boulogne-Billancourt.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Un service premium de chauffeur privé pour les trajets quotidiens, aéroport et déplacements professionnels dans la proche couronne parisienne.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" tone="gold">Demander un devis <ArrowRight size={15} aria-hidden="true" /></Button>
            <Button href="/zone-intervention" tone="dark">Découvrir la zone <ArrowRight size={15} aria-hidden="true" /></Button>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container className="grid gap-8 md:grid-cols-3">
          {details.map(({ icon: Icon, title, text }) => (
            <article key={title} className="rounded-[1.5rem] border border-black/10 bg-[var(--paper)] p-6">
              <span className="grid size-12 place-items-center rounded-full bg-white text-[var(--gold)] shadow-sm ring-1 ring-black/5">
                <Icon size={18} aria-hidden="true" />
              </span>
              <h2 className="mt-5 text-xl font-medium text-black">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-black/60">{text}</p>
            </article>
          ))}
        </Container>
      </Section>
    </main>
  );
}
