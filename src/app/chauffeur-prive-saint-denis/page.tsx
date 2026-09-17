import { ArrowRight, CarFront, MapPinned, TrainFront } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Chauffeur privé Saint-Denis | VTC premium",
  description:
    "Chauffeur privé Saint-Denis pour les trajets vers Paris, les gares et les évents professionnels ou privés en Île-de-France.",
  alternates: { canonical: "/chauffeur-prive-saint-denis" },
  keywords: ["chauffeur privé Saint-Denis", "VTC Saint-Denis", "transport premium Seine-Saint-Denis", "chauffeur privé gare Paris"],
};

const items = [
  { icon: TrainFront, title: "Gares & destinations", text: "Trajet jusqu’aux grandes gares et aux principales zones professionnelles et touristiques." },
  { icon: CarFront, title: "Trajets personnalisés", text: "Organisation conforme à votre planning pour chaque trajet, depuis ou vers Saint-Denis." },
  { icon: MapPinned, title: "Zone d’intervention", text: "Service disponible en Seine-Saint-Denis et vers les zones parisiennes et franciliennes." },
];

export default function ChauffeurPriveSaintDenisPage() {
  return (
    <main className="bg-[var(--paper)]">
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Saint-Denis</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Chauffeur privé<br />
            <em className="text-[var(--gold-light)]">Saint-Denis.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Des déplacements bien organisés pour aller vers Paris, les gares, les aéroports et les lieux de rendez-vous professionnels ou privés.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" tone="gold">Réserver mon trajet <ArrowRight size={15} aria-hidden="true" /></Button>
            <Button href="/zone-intervention" tone="dark">Nos zones <ArrowRight size={15} aria-hidden="true" /></Button>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container className="grid gap-8 md:grid-cols-3">
          {items.map(({ icon: Icon, title, text }) => (
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
