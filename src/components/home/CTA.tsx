import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function CTA() {
  return <Section id="reservation" className="relative isolate overflow-hidden bg-[var(--ink)] text-white"><Image src="/images/city-night.webp" alt="Berline de prestige dans une ville illuminée de nuit" fill sizes="100vw" className="-z-20 object-cover object-center" /><div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,.9),rgba(8,8,8,.62)),linear-gradient(0deg,rgba(8,8,8,.7),transparent)]" /><Container className="relative text-center"><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold-light)]">Votre prochain trajet</p><h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight text-white sm:text-6xl">Réservez l&apos;excellence.</h2><p className="mx-auto mt-5 max-w-md text-sm leading-6 text-white/70">Une demande de réservation ou un trajet sur mesure ? Notre équipe vous répondra avec les informations disponibles.</p><Button href="/contact" className="mt-8">Demander une réservation <ArrowRight size={15} aria-hidden="true" /></Button></Container></Section>;
}
