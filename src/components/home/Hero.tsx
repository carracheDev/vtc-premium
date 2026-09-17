import Image from "next/image";
import { ArrowRight, CarFront, Clock3, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function Hero() {
  return (
    <section className="relative isolate min-h-[42rem] overflow-hidden bg-[var(--ink)] text-white lg:min-h-[48rem]">
      <Image src="/images/hero-chauffeur.webp" alt="Berline haut de gamme et chauffeur privé devant un hôtel parisien" fill priority sizes="100vw" quality={82} className="-z-20 object-cover object-[62%_center] lg:object-center" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,8,8,.92)_0%,rgba(8,8,8,.62)_48%,rgba(8,8,8,.2)_100%),linear-gradient(0deg,rgba(8,8,8,.65),transparent_55%)]" />
      <Container className="flex min-h-[42rem] flex-col justify-center pb-12 pt-28 lg:min-h-[48rem] lg:pb-20">
        <div className="max-w-2xl">
          <p className="text-[0.68rem] font-semibold tracking-[0.2em] text-[var(--gold-light)]">VTC HAUT DE GAMME · PARIS &amp; ÎLE-DE-FRANCE</p>
          <h1 className="mt-6 max-w-xl font-display text-[clamp(2.5rem,10vw,5rem)] font-extrabold leading-[1.02] tracking-[-0.045em]">L&apos;excellence<br />à chaque <em className="font-semibold text-[var(--gold-light)]">trajet</em></h1>
          <p className="mt-7 max-w-md text-[0.9375rem] leading-7 text-white/75 sm:text-base">Chauffeurs privés professionnels, véhicules de prestige et service sur mesure, pensé autour de votre temps.</p>
          <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center"><Button href="/contact" className="min-h-12">Réserver maintenant <ArrowRight size={15} aria-hidden="true" /></Button><Button href="/services" tone="outline" className="min-h-12">Découvrir nos services</Button></div>
          <div className="mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/20 pt-5 text-white/75"><div className="flex flex-col gap-2"><ShieldCheck size={22} className="text-[var(--gold)]" aria-hidden="true" /><strong className="font-display text-sm text-white">Sécurité</strong><span className="text-[0.66rem] leading-4">Votre tranquillité avant tout</span></div><div className="flex flex-col gap-2"><Clock3 size={22} className="text-[var(--gold)]" aria-hidden="true" /><strong className="font-display text-sm text-white">Ponctualité</strong><span className="text-[0.66rem] leading-4">Un départ maîtrisé</span></div><div className="flex flex-col gap-2"><CarFront size={22} className="text-[var(--gold)]" aria-hidden="true" /><strong className="font-display text-sm text-white">Confort</strong><span className="text-[0.66rem] leading-4">Un véhicule irréprochable</span></div></div>
        </div>
      </Container>
    </section>
  );
}
