import { ArrowRight, MapPinned, Plane, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Chauffeur privé Versailles | VTC premium",
  description:
    "Chauffeur privé Versailles et environs avec service premium, ponctuel et discret pour les trajets professionnels et privés.",
  alternates: { canonical: "/chauffeur-prive-versailles" },
  keywords: ["chauffeur privé Versailles", "VTC Versailles", "transport professionnel Versailles", "chauffeur privé Île-de-France"],
};

const benefits = [
  { icon: Plane, title: "Aéroport & gares", text: "Mise à disposition pour les trajets vers Paris, les aéroports et les principales gares." },
  { icon: MapPinned, title: "Zone de couverture", text: "Service disponible dans Versailles et ses environs pour les déplacements sur mesure." },
  { icon: ShieldCheck, title: "Service premium", text: "Service discret et fiable pour les trajets privés ou professionnels, selon votre programme." },
];

export default function ChauffeurPriveVersaillesPage() {
  return (
    <main className="bg-[var(--paper)]">
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Versailles</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Chauffeur privé<br />
            <em className="text-[var(--gold-light)]">Versailles.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Prenez le chemin de vos rendez-vous, de votre vol ou de votre événement avec un service premium pensée pour votre agenda.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button href="/contact" tone="gold">Réserver maintenant <ArrowRight size={15} aria-hidden="true" /></Button>
            <Button href="/zone-intervention" tone="dark">Voir les zones <ArrowRight size={15} aria-hidden="true" /></Button>
          </div>
        </Container>
      </section>

      <Section className="bg-white">
        <Container className="grid gap-8 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }) => (
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
