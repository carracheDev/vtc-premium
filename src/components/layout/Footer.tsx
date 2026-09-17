import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[var(--ink)] text-white/65">
      <Container className="grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div><Link href="/" className="font-display text-lg tracking-[0.08em] text-white">PRESTIGE <span className="text-[var(--gold)]">VTC</span></Link><p className="mt-5 max-w-xs text-sm leading-7">Service de chauffeur privé premium à Paris et en Île-de-France.</p></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Navigation</h2><nav className="mt-5 grid gap-3 text-sm" aria-label="Navigation du pied de page"><Link href="/services" className="hover:text-[var(--gold-light)]">Services</Link><Link href="/zone-intervention" className="hover:text-[var(--gold-light)]">Zone d’intervention</Link><Link href="/contact" className="hover:text-[var(--gold-light)]">Contact</Link></nav></div>
        <div><h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--gold)]">Contact</h2><div className="mt-5 grid gap-3 text-sm"><a href="tel:+33100000000" className="hover:text-[var(--gold-light)]">+33 1 00 00 00 00 <span className="text-xs text-white/40">(exemple)</span></a><a href="mailto:contact@prestige-vtc.fr" className="break-all hover:text-[var(--gold-light)]">contact@prestige-vtc.fr</a><p className="text-xs text-white/40">Coordonnées de démonstration à configurer.</p></div></div>
      </Container>
      <Container className="flex flex-col gap-3 border-t border-white/10 py-5 text-[0.68rem] tracking-[0.08em] text-white/40 sm:flex-row sm:items-center sm:justify-between"><span>© 2026 PRESTIGE VTC. Tous droits réservés.</span><span>Paris · Île-de-France · <Link href="/mentions-legales" className="hover:text-[var(--gold-light)]">Mentions légales</Link></span></Container>
    </footer>
  );
}
