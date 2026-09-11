import Link from "next/link";
import {
  ArrowRight,
  Building2,
  CarFront,
  Check,
  MapPin,
  Navigation,
  Plane,
  TrainFront,
} from "lucide-react";

const zones = [
  "Paris",
  "Boulogne-Billancourt",
  "Neuilly-sur-Seine",
  "Levallois-Perret",
  "Saint-Denis",
  "Versailles",
];

export default function ZoneInterventionPage() {
  return (
    <main className="inner-page">
      {/* HERO */}
      <section className="inner-hero zone-hero">
        <div className="inner-hero-overlay" />

        <div className="container inner-hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line" />
            ZONE D’INTERVENTION
          </div>

          <h1>
            Paris &
            <br />
            <em>Île-de-France.</em>
          </h1>

          <p>
            ÉLITE VTC vous accompagne à Paris et dans les principales communes
            d’Île-de-France, pour vos trajets privés comme professionnels.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section className="zone-intro section">
        <div className="container zone-intro-grid">
          <div>
            <p className="section-label">Une couverture locale</p>

            <h2>
              Où que vous soyez,
              <br />
              <span>nous venons à vous.</span>
            </h2>
          </div>

          <div className="zone-copy">
            <p>
              Notre service de chauffeur privé couvre Paris et sa proche
              couronne. Nous assurons également les transferts vers les
              aéroports, les gares et différentes destinations en
              Île-de-France sur réservation.
            </p>

            <p>
              Pour un trajet spécifique, n’hésitez pas à nous communiquer
              votre adresse de départ et votre destination.
            </p>
          </div>
        </div>
      </section>

      {/* ZONES */}
      <section className="zones-section">
        <div className="container">
          <div className="zones-header">
            <div>
              <p className="section-label">Principales zones</p>
              <h2>
                Nos destinations
                <br />
                <span>habituelles.</span>
              </h2>
            </div>

            <div className="map-label">
              <Navigation size={17} />
              PARIS · FRANCE
            </div>
          </div>

          <div className="zones-layout">
            <div className="fake-map">
              <div className="map-grid" />

              <div className="map-center">
                <span className="map-pulse" />
                <MapPin size={27} />
                <strong>PARIS</strong>
              </div>

              <div className="map-point point-one">
                <span />
                Versailles
              </div>

              <div className="map-point point-two">
                <span />
                Saint-Denis
              </div>

              <div className="map-point point-three">
                <span />
                Boulogne
              </div>
            </div>

            <div className="zones-list">
              {zones.map((zone, index) => (
                <div className="zone-item" key={zone}>
                  <span>0{index + 1}</span>

                  <div>
                    <MapPin size={16} />
                    <strong>{zone}</strong>
                  </div>

                  <Check size={15} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFERS */}
      <section className="transfer-section section">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="section-label">Transferts</p>

              <h2>
                Gares, aéroports
                <br />
                <span>& destinations privées.</span>
              </h2>
            </div>
          </div>

          <div className="transfer-grid">
            <div>
              <Plane size={25} />
              <h3>Aéroports</h3>
              <p>
                Charles-de-Gaulle, Orly et autres destinations aéroportuaires
                sur réservation.
              </p>
            </div>

            <div>
              <TrainFront size={25} />
              <h3>Gares</h3>
              <p>
                Les principales gares parisiennes et franciliennes, avec prise
                en charge sur rendez-vous.
              </p>
            </div>

            <div>
              <Building2 size={25} />
              <h3>Destinations privées</h3>
              <p>
                Hôtels, résidences, entreprises et lieux événementiels en
                Île-de-France.
              </p>
            </div>

            <div>
              <CarFront size={25} />
              <h3>Longue distance</h3>
              <p>
                Des trajets personnalisés au-delà de l’Île-de-France sur
                réservation préalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO LOCAL */}
      <section className="local-seo">
        <div className="container local-seo-grid">
          <div>
            <p className="section-label">Chauffeur privé à Paris</p>

            <h2>
              Un chauffeur
              <br />
              <span>près de vous.</span>
            </h2>
          </div>

          <div>
            <p>
              Besoin d’un VTC à Paris ou en Île-de-France ? ÉLITE VTC propose
              un service de chauffeur privé pour vos déplacements personnels,
              professionnels, transferts aéroport et trajets longue distance.
            </p>

            <p>
              Notre priorité : vous garantir une prise en charge ponctuelle,
              un véhicule confortable et une expérience de transport à la
              hauteur de vos attentes.
            </p>

            <Link href="/services" className="text-link">
              Découvrir nos services
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="inner-cta">
        <div className="container inner-cta-content">
          <p className="section-label">Paris · Île-de-France</p>

          <h2>
            Votre destination.
            <br />
            <span>Notre engagement.</span>
          </h2>

          <a href="tel:+33100000000" className="button button-primary">
            Réserver mon trajet
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}
