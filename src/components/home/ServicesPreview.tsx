import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, CarFront, Plane, UserRound } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

const services = [
  { icon: CarFront, image: "/images/voiture-luxe-interieur.webp", alt: "Berline de prestige pour un transfert privé", title: "Transferts privés", text: "Un trajet confortable et ponctuel, depuis ou vers votre adresse." },
  { icon: Plane, image: "/images/transfert-aeroport.webp", alt: "Chauffeur accueillant un passager devant un hôtel", title: "Transferts aéroport", text: "Une prise en charge sereine pour vos départs et arrivées." },
  { icon: CalendarDays, image: "/images/chauffeur-professionnel.webp", alt: "Chauffeur professionnel devant une berline haut de gamme", title: "Mise à disposition", text: "Votre chauffeur privé vous accompagne selon votre programme." },
  { icon: UserRound, image: "/images/hotel-transfer.webp", alt: "Chauffeur ouvrant une voiture dans une rue élégante", title: "Événements", text: "Une présence élégante et discrète pour vos moments importants." },
];

export function ServicesPreview() {
  return <Section className="bg-[var(--ink)] text-white"><Container><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div><p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[var(--gold)]">Nos services</p><h2 className="mt-4 max-w-xl font-display text-[clamp(2rem,5vw,3.25rem)] font-bold leading-[1.08]">Des solutions pensées<br /><em className="font-semibold text-[var(--gold-light)]">pour votre rythme.</em></h2></div><Link href="/services" className="inline-flex items-center gap-3 text-xs font-medium text-white/65 transition-colors hover:text-[var(--gold-light)]">Voir tous les services <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="mt-12 grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">{services.map(({ icon: Icon, image, alt, title, text }) => <article className="overflow-hidden bg-[var(--ink-soft)] transition-colors hover:bg-[#1a1a17]" key={title}><div className="relative aspect-[4/3] overflow-hidden"><Image src={image} alt={alt} fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-500 hover:scale-105" /></div><div className="p-6"><Icon size={27} strokeWidth={1.3} className="text-[var(--gold)]" aria-hidden="true" /><h3 className="mt-8 font-display text-xl font-semibold leading-tight">{title}</h3><p className="mt-3 text-sm leading-6 text-white/55">{text}</p><Link href="/services" className="mt-7 inline-flex items-center gap-2 text-xs font-medium text-[var(--gold)] hover:text-[var(--gold-light)]">En savoir plus <ArrowRight size={14} aria-hidden="true" /></Link></div></article>)}</div></Container></Section>;
}
