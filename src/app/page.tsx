import Link from "next/link";
import { ArrowRight, CalendarDays, CarFront, Plane, UserRound } from "lucide-react";

const services = [
  { icon: CarFront, title: "Transferts privés", text: "Un trajet confortable et ponctuel, depuis ou vers votre adresse." },
  { icon: Plane, title: "Transferts aéroport", text: "Une prise en charge sereine pour vos départs et arrivées." },
  { icon: CalendarDays, title: "Mise à disposition", text: "Votre chauffeur privé vous accompagne selon votre programme." },
  { icon: UserRound, title: "Événements", text: "Une présence élégante et discrète pour vos moments importants." },
];

export default function Home() {
  return (
    <main>
      <section className="prestige-hero">
        <div className="hero-shade" />
        <header className="prestige-header container">
          <Link href="/" className="prestige-logo" aria-label="Prestige VTC accueil"><span className="crest">♜</span><span><strong>PRESTIGE</strong><small>VTC</small></span></Link>
          <nav className="prestige-nav" aria-label="Navigation principale"><Link className="active" href="/">Accueil</Link><Link href="/services">Services</Link><a href="#apropos">À propos</a></nav>
          <a href="#reservation" className="gold-button header-button">Réserver maintenant <ArrowRight size={13} /></a>
        </header>
        <div className="container prestige-hero-content">
          <p className="prestige-eyebrow">VTC HAUT DE GAMME</p>
          <h1>L&apos;excellence<br />à chaque <em>trajet</em></h1>
          <p className="prestige-lead">Chauffeurs privés professionnels, véhicules de prestige,<br className="desktop-only" /> service sur mesure 24h/24 &amp; 7j/7.</p>
          <a href="#reservation" className="gold-button hero-button">Réserver maintenant <ArrowRight size={14} /></a>
          <div className="trust-row"><div><CarFront size={25} strokeWidth={1.3} /><strong>Sécurité</strong><span>Votre sécurité<br />est notre priorité</span></div><div><span className="clock-icon">◷</span><strong>Ponctualité</strong><span>Toujours à l&apos;heure,<br />à chaque fois</span></div><div><span className="star-icon">☆</span><strong>Confort</strong><span>Des véhicules haut<br />de gamme</span></div></div>
        </div>
      </section>
      <section className="prestige-services" id="services"><div className="container services-intro"><p className="gold-label">NOS SERVICES</p><h2>Des services adaptés à vos besoins</h2><span className="gold-rule" /><p>Que ce soit pour un transfert, une mise à disposition ou un événement spécial,<br className="desktop-only" /> nous avons la solution qu&apos;il vous faut.</p></div><div className="container service-cards">{services.map(({ icon: Icon, title, text }) => <article className="prestige-service-card" key={title}><Icon size={28} strokeWidth={1.3} /><h3>{title}</h3><p>{text}</p><Link href="/services">En savoir plus <ArrowRight size={14} /></Link></article>)}</div></section>
      <section id="apropos" className="prestige-about"><div className="container"><p className="gold-label">L&apos;ART DU SERVICE</p><h2>Votre confort,<br /><em>notre signature.</em></h2><p>Chaque déplacement est préparé dans les moindres détails afin de vous offrir une expérience fluide, élégante et parfaitement sereine.</p></div></section>
      <section id="reservation" className="prestige-cta"><div className="container"><p className="gold-label">VOTRE PROCHAIN TRAJET</p><h2>Réservez l&apos;excellence.</h2><a href="tel:+33100000000" className="gold-button">Réserver maintenant <ArrowRight size={14} /></a></div></section>
      <footer className="prestige-footer"><div className="container"><span>PRESTIGE VTC</span><span>Paris · Île-de-France</span><a href="mailto:contact@prestige-vtc.fr">contact@prestige-vtc.fr</a></div></footer>
    </main>
  );
}
