import { ArrowRight, BriefcaseBusiness, MapPinned, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Chauffeur privé Neuilly-sur-Seine | VTC premium",
  description:
    "Chauffeur privé Neuilly-sur-Seine et proche couronne pour vos déplacements professionnels, aéroport et trajets privés en toute sérénité.",
  alternates: { canonical: "/chauffeur-prive-neuilly-sur-seine" },
  keywords: ["chauffeur privé Neuilly-sur-Seine", "VTC Neuilly", "chauffeur privé proche Paris", "transport premium Neuilly"],
};

const services = [
  { icon: BriefcaseBusiness, title: "Déplacements professionnels", text: "Trajets fiables et ponctuels vers rendez-vous, bureaux et réunions." },
  { icon: MapPinned, title: "Zone parisienne", text: "Couverture de la commune et de ses accès vers Paris et l’aéroport." },
  { icon: ShieldCheck, title: "Service discret", text: "Voyage en toute tranquillité avec un chauffeur attentif à votre agenda." },
];

export default function ChauffeurPriveNeuillyPage() {
  return (
    <main className="bg-[var(--paper)]">
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Neuilly-sur-Seine</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Chauffeur privé<br />
            <em className="text-[var(--gold-light)]">Neuilly-sur-Seine.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Un service VTC premium pensé pour les déplacements de proximité et les trajets vers Paris, les gares ou les aéroports.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" tone="gold">Réserver mon trajet <ArrowRight size={15} aria-hidden="true" /></Button>
            <Button href="/zone-intervention" tone="dark">Zones d’intervention <ArrowRight size={15} aria-hidden="true" /></Button>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container className="grid gap-8 md:grid-cols-3">
          {services.map(({ icon: Icon, title, text }) => (
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
