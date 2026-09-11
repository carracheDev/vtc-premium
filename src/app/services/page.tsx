import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Car,
  Check,
  Clock3,
  Plane,
  Sparkles,
  Star,
  TrainFront,
  Users,
} from "lucide-react";

const services = [
  {
    number: "01",
    icon: Plane,
    title: "Transferts aéroport",
    subtitle: "Paris · Aéroports",
    description:
      "Voyagez sereinement entre Paris et les principaux aéroports d’Île-de-France. Votre chauffeur vous attend à l’heure convenue.",
    features: [
      "Prise en charge ponctuelle",
      "Suivi de votre vol",
      "Aide avec les bagages",
    ],
  },
  {
    number: "02",
    icon: TrainFront,
    title: "Transferts gares",
    subtitle: "Paris · Grandes gares",
    description:
      "Un service confortable pour rejoindre ou quitter les principales gares parisiennes, sans stress ni perte de temps.",
    features: [
      "Gare du Nord",
      "Gare de Lyon",
      "Montparnasse & Saint-Lazare",
    ],
  },
  {
    number: "03",
    icon: BriefcaseBusiness,
    title: "Déplacements professionnels",
    subtitle: "Business · Corporate",
    description:
      "Une solution de transport discrète et fiable pour vos rendez-vous, réunions et déplacements professionnels.",
    features: [
      "Ponctualité prioritaire",
      "Service discret",
      "Facturation professionnelle",
    ],
  },
  {
    number: "04",
    icon: Users,
    title: "Mise à disposition",
    subtitle: "Sur mesure",
    description:
      "Votre chauffeur reste à votre disposition pendant plusieurs heures pour accompagner votre programme.",
    features: [
      "Durée flexible",
      "Itinéraire personnalisé",
      "Chauffeur dédié",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="inner-page">
      {/* PAGE HERO */}
      <section className="inner-hero services-hero">
        <div className="inner-hero-overlay" />

        <div className="container inner-hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            NOS SERVICES
          </div>

          <h1>
            Le confort
            <br />
            <em>à votre mesure.</em>
          </h1>

          <p>
            Des solutions de transport pensées pour vos déplacements privés,
            professionnels et vos transferts longue distance.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="services-intro section">
        <div className="container services-intro-grid">
          <div>
            <p className="section-label">Notre approche</p>
            <h2>
              Chaque trajet
              <br />
              <span>est différent.</span>
            </h2>
          </div>

          <div>
            <p className="services-intro-text">
              C’est pourquoi ÉLITE VTC propose plusieurs solutions adaptées à
              vos besoins. Que vous sortiez d’un avion, rejoigniez un
              rendez-vous ou souhaitiez simplement profiter d’un trajet sans
              contraintes, notre priorité reste la même : vous offrir une
              expérience fiable et confortable.
            </p>

            <div className="mini-features">
              <div>
                <Clock3 size={19} />
                <span>Ponctualité</span>
              </div>

              <div>
                <Car size={19} />
                <span>Confort</span>
              </div>

              <div>
                <Sparkles size={19} />
                <span>Attention</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES LIST */}
      <section className="service-list-section">
        <div className="container">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article className="large-service" key={service.title}>
                <div className="large-service-number">{service.number}</div>

                <div className="large-service-icon">
                  <Icon size={30} strokeWidth={1.4} />
                </div>

                <div className="large-service-main">
                  <p className="service-subtitle">{service.subtitle}</p>

                  <h2>{service.title}</h2>

                  <p className="large-service-description">
                    {service.description}
                  </p>

                  <ul>
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span>
                          <Check size={13} />
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="large-service-action">
                  <Link href="#reservation" className="round-arrow">
                    <ArrowRight size={20} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* REASSURANCE */}
      <section className="reassurance section">
        <div className="container reassurance-grid">
          <div>
            <p className="section-label">Une exigence constante</p>

            <h2>
              Le détail fait
              <br />
              <span>la différence.</span>
            </h2>
          </div>

          <div className="reassurance-cards">
            <div>
              <Star size={21} />
              <h3>Service premium</h3>
              <p>
                Une expérience pensée pour vous offrir confort, discrétion et
                tranquillité.
              </p>
            </div>

            <div>
              <Clock3 size={21} />
              <h3>À l’heure</h3>
              <p>
                Nous accordons une attention particulière aux horaires et aux
                contraintes de chaque trajet.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="reservation" className="inner-cta">
        <div className="container inner-cta-content">
          <p className="section-label">Votre trajet</p>

          <h2>
            Besoin d’un chauffeur
            <br />
            <span>à votre disposition ?</span>
          </h2>

          <a href="tel:+33100000000" className="button button-primary">
            Réserver un trajet
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
