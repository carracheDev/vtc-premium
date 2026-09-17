"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";
import { Container } from "@/components/ui/Container";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/zone-intervention", label: "Zone d'intervention" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10 text-white">
      <Container className="flex min-h-[4.75rem] items-center justify-between gap-4">
        <Link href="/" className="flex shrink-0 items-center gap-3 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-light)]" onClick={() => setIsOpen(false)}>
          <span aria-hidden="true" className="grid size-9 place-items-center border border-[var(--gold)] text-sm text-[var(--gold)]">♜</span>
          <span className="leading-none"><strong className="block font-display text-base font-medium tracking-[0.08em]">PRESTIGE</strong><small className="mt-1 block text-[0.62rem] tracking-[0.28em] text-[var(--gold)]">VTC</small></span>
        </Link>

        <nav className="hidden items-center gap-7 text-xs font-medium tracking-[0.01em] text-white/70 lg:flex" aria-label="Navigation principale">
          {links.map((link) => <Link key={link.href} href={link.href} className="border-b-2 border-transparent py-5 transition-colors hover:border-[var(--gold)] hover:text-[var(--gold-light)]">{link.label}</Link>)}
        </nav>

        <Link href="/contact" className="hidden min-h-10 items-center gap-3 bg-[var(--gold)] px-4 text-[0.68rem] font-semibold text-[var(--ink)] transition-colors hover:bg-[var(--gold-light)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-light)] sm:inline-flex">Réserver maintenant <ArrowRight size={14} aria-hidden="true" /></Link>
        <button type="button" className="inline-grid size-11 place-items-center border border-white/20 text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--gold-light)] lg:hidden" aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"} aria-expanded={isOpen} aria-controls="mobile-navigation" onClick={() => setIsOpen((open) => !open)}>{isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}</button>
      </Container>

      {isOpen && <nav id="mobile-navigation" className="border-t border-white/10 bg-[var(--ink)]/95 px-5 py-5 lg:hidden" aria-label="Navigation mobile">{links.map((link) => <Link key={link.href} href={link.href} className="block border-b border-white/10 py-3 text-sm text-white/80 last:border-0 hover:text-[var(--gold-light)]" onClick={() => setIsOpen(false)}>{link.label}</Link>)}<Link href="/contact" className="mt-4 flex min-h-11 items-center justify-center gap-3 bg-[var(--gold)] text-xs font-semibold text-[var(--ink)]" onClick={() => setIsOpen(false)}>Réserver maintenant <ArrowRight size={14} aria-hidden="true" /></Link></nav>}
    </header>
  );
}
