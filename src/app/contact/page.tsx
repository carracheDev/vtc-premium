import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export const metadata = {
  title: "Contact et réservation chauffeur privé",
  description:
    "Demandez un devis ou une réservation pour un chauffeur privé premium à Paris, en Île-de-France et vers les aéroports et gares.",
  alternates: { canonical: "/contact" },
  keywords: [
    "réserver VTC Paris",
    "contact chauffeur privé",
    "devis chauffeur privé Paris",
    "VTC aéroport Paris",
  ],
};

const fieldClass = "mt-2 min-h-12 w-full border border-black/15 bg-white px-4 text-sm text-[var(--ink)] outline-none transition-colors placeholder:text-black/35 focus:border-[var(--gold)]";

export default function ContactPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Prestige VTC",
    description: "Page de contact et de réservation pour un chauffeur privé premium à Paris et en Île-de-France.",
    mainEntity: {
      "@type": "Organization",
      name: "Prestige VTC",
      telephone: "+33 1 00 00 00 00",
      email: "contact@prestige-vtc.fr",
      areaServed: ["Paris", "Île-de-France"],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Paris",
        addressCountry: "FR",
      },
    },
  };

  return (
    <main className="bg-[var(--paper)]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <section className="bg-[var(--ink)] pb-20 pt-36 text-white sm:pb-28">
        <Container>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Contact &amp; réservation</p>
          <h1 className="mt-6 max-w-3xl font-display text-5xl leading-[.98] sm:text-7xl">
            Parlons de votre<br />
            <em className="text-[var(--gold-light)]">prochain trajet.</em>
          </h1>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            Décrivez-nous votre besoin. Nous vous répondons rapidement pour préparer votre trajet et votre devis.
          </p>
        </Container>
      </section>

      <Section>
        <Container className="grid gap-14 lg:grid-cols-[.7fr_1.3fr] lg:gap-24">
          <div>
            <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Nous contacter</p>
            <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
              Une demande,<br />
              <em className="text-[var(--gold)]">une réponse claire.</em>
            </h2>

            <div className="mt-10 grid gap-6 text-sm">
              <a href="tel:+33100000000" className="flex items-start gap-4 hover:text-[var(--gold)]">
                <Phone size={19} className="mt-0.5 text-[var(--gold)]" aria-hidden="true" />
                <span>
                  <strong className="block font-medium">Téléphone</strong>
                  <span className="mt-1 block text-black/55">+33 1 00 00 00 00</span>
                </span>
              </a>
              <a href="mailto:contact@prestige-vtc.fr" className="flex items-start gap-4 hover:text-[var(--gold)]">
                <Mail size={19} className="mt-0.5 text-[var(--gold)]" aria-hidden="true" />
                <span>
                  <strong className="block font-medium">Email</strong>
                  <span className="mt-1 block break-all text-black/55">contact@prestige-vtc.fr</span>
                </span>
              </a>
              <div className="flex items-start gap-4">
                <MapPin size={19} className="mt-0.5 text-[var(--gold)]" aria-hidden="true" />
                <span>
                  <strong className="block font-medium">Zone</strong>
                  <span className="mt-1 block text-black/55">Paris et Île-de-France</span>
                </span>
              </div>
            </div>

            <p className="mt-10 border-l-2 border-[var(--gold)] pl-4 text-sm leading-7 text-black/60">
              Nous répondons rapidement à vos demandes de réservation, devis et aide au déplacement.
            </p>
          </div>

          <form className="rounded-[2rem] border border-black/10 bg-white p-7 shadow-[0_16px_60px_rgba(8,8,8,0.04)] sm:p-10">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">Nom</label>
                <input className={fieldClass} type="text" name="name" placeholder="Votre nom" />
              </div>
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">Email</label>
                <input className={fieldClass} type="email" name="email" placeholder="votre@email.com" />
              </div>
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">Sujet</label>
              <input className={fieldClass} type="text" name="subject" placeholder="Ex : Demande de transfert aéroport" />
            </div>

            <div className="mt-6">
              <label className="text-xs font-semibold uppercase tracking-[0.16em] text-black/55">Message</label>
              <textarea className={`${fieldClass} min-h-32 py-3`} name="message" rows={4} placeholder="Précisions utiles pour votre demande" />
            </div>

            <Button href="mailto:contact@prestige-vtc.fr?subject=Demande de réservation" className="mt-7 w-full sm:w-auto">
              Envoyer la demande <ArrowRight size={15} aria-hidden="true" />
            </Button>
          </form>
        </Container>
      </Section>
    </main>
  );
}
