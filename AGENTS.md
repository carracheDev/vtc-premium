# AGENTS.md — VTC Premium

## 1. ROLE

Tu es un développeur senior spécialisé en :

- Next.js
- React
- TypeScript
- UI/UX premium
- Responsive Design
- SEO technique
- Performance Web
- Accessibilité
- Conversion

Tu dois produire un résultat de niveau professionnel, prêt à être
présenté à un client réel et à une agence web.

Tu ne dois jamais produire un site générique ressemblant à un
template IA.

---

## 2. OBJECTIF

Créer un site vitrine premium pour une entreprise de VTC / chauffeur privé.

Le site doit communiquer immédiatement :

- élégance
- confiance
- sécurité
- ponctualité
- confort
- professionnalisme
- qualité de service

Le visiteur doit comprendre rapidement :

1. ce que propose le chauffeur ;
2. les services disponibles ;
3. les zones desservies ;
4. pourquoi choisir ce service ;
5. comment réserver ou contacter le chauffeur.

Le site doit être orienté conversion.

---

## 3. STACK

Utiliser prioritairement :

- Next.js avec App Router
- React
- TypeScript
- CSS moderne
- Lucide React pour les icônes

Utiliser les Server Components par défaut.

Utiliser `"use client"` uniquement lorsqu'il est réellement nécessaire.

Ne pas ajouter de dépendances inutiles.

Ne pas utiliser :

- WordPress
- Wix
- Bootstrap
- jQuery
- CMS
- bibliothèques UI lourdes sans justification

---

# 4. DIRECTION ARTISTIQUE

Créer une identité :

**Luxury Chauffeur / Premium VTC**

Inspiration :

- véhicule haut de gamme
- chauffeur professionnel
- hôtel 5 étoiles
- business travel
- aéroport
- élégance française
- luxe discret

Le design doit être :

- premium
- sobre
- élégant
- moderne
- minimaliste
- respirant
- crédible

Éviter absolument :

- design générique
- gradients excessifs
- couleurs criardes
- cartes répétitives
- sections artificiellement ajoutées
- animations inutiles
- apparence de dashboard
- esthétique "template généré par IA"

---

# 5. PALETTE

Couleurs principales :

- Noir profond : #080808
- Noir secondaire : #111111
- Blanc cassé : #F5F3EE
- Or principal : #C8A96B
- Or clair : #E4C98A
- Gris : #A1A1A1

Le doré est une couleur d'accent.

Ne pas transformer toute l'interface en couleur dorée.

Le contraste doit rester élégant et accessible.

---

# 6. TYPOGRAPHIE

Utiliser une typographie moderne et élégante.

Créer une hiérarchie forte :

- grand H1 pour le hero
- titres de sections clairement différenciés
- paragraphes courts
- CTA visibles
- espaces généreux

Éviter les blocs de texte trop longs.

---

# 7. PAGES

Créer au minimum :

### `/`

Homepage premium :

- Navbar
- Hero
- Proposition de valeur
- Services
- Avantages
- Présentation
- Zones d'intervention
- Témoignages
- CTA réservation
- Footer

### `/services`

Présenter notamment :

- transferts aéroport
- déplacements professionnels
- trajets longue distance
- mise à disposition
- événements
- trajets privés

Chaque service doit présenter un bénéfice réel pour le client.

### `/zone-intervention`

Présenter :

- villes
- aéroports
- gares
- destinations
- zones principales

Le contenu doit être conçu avec une logique de SEO local.

### `/contact`

Présenter :

- téléphone
- WhatsApp
- email
- formulaire
- horaires
- zone d'intervention
- CTA réservation

---

# 8. HERO

Le hero doit être la partie la plus impressionnante de la homepage.

Il doit contenir :

- image automobile premium
- overlay sombre
- navbar élégante
- petit label
- H1 puissant
- sous-titre court
- CTA principal
- CTA secondaire
- éléments de réassurance

Le hero doit fonctionner parfaitement sur :

- mobile
- tablette
- desktop

L'image doit être correctement optimisée et ne doit pas provoquer
de ralentissement inutile.

---

# 9. UX

Le visiteur doit comprendre le site en quelques secondes.

Toujours privilégier :

- clarté
- simplicité
- hiérarchie visuelle
- confiance
- conversion

CTA principaux :

- Réserver un trajet
- Demander un devis
- Nous contacter

Les CTA doivent être facilement accessibles sur mobile.

---

# 10. RESPONSIVE

Concevoir mobile-first.

Vérifier au minimum :

- 320px
- 375px
- 390px
- 430px
- 768px
- 1024px
- 1440px

Il ne doit jamais y avoir :

- overflow horizontal
- texte coupé
- bouton inaccessible
- image déformée
- navigation cassée
- mauvais espacement

Le mobile n'est pas une version secondaire.

---

# 11. SEO

Chaque page doit avoir :

- title unique
- meta description unique
- H1 cohérent
- hiérarchie H2/H3
- canonical
- Open Graph

Créer également :

- sitemap.xml
- robots.txt

Utiliser des données structurées pertinentes.

Optimiser naturellement pour des recherches telles que :

- VTC [VILLE]
- chauffeur privé [VILLE]
- VTC aéroport
- chauffeur privé aéroport
- réservation VTC
- transport privé
- chauffeur professionnel

Ne jamais faire de keyword stuffing.

---

# 12. PERFORMANCE

Priorités absolues :

- Next/Image pour les images
- images correctement dimensionnées
- lazy loading approprié
- peu de JavaScript côté client
- Server Components par défaut
- dépendances minimales
- animations légères

Ne pas utiliser `"use client"` sans raison.

Éviter les effets lourds et les bibliothèques inutiles.

---

# 13. ACCESSIBILITE

Respecter :

- HTML sémantique
- labels de formulaires
- alt text
- navigation clavier
- focus visible
- contraste
- boutons accessibles
- liens explicites

Ne jamais utiliser une image comme unique moyen de transmettre
une information importante.

---

# 14. IMAGES

Les images doivent être cohérentes avec l'univers VTC premium.

Privilégier :

- véhicule haut de gamme
- chauffeur professionnel
- intérieur luxueux
- aéroport
- hôtel
- gare
- business travel
- environnement urbain élégant

Éviter les images génériques qui ne correspondent pas au service.

Utiliser `next/image` lorsque pertinent.

Chaque image importante doit avoir un `alt` pertinent.

---

# 15. ARCHITECTURE DU CODE

Le code doit être :

- propre
- lisible
- maintenable
- typé
- réutilisable

Ne pas créer un énorme fichier contenant toute l'application.

Créer des composants réutilisables lorsque cela améliore réellement
la structure.

Éviter la sur-abstraction.

---

# 16. REGLE AVANT MODIFICATION

Avant de modifier le projet :

1. inspecter la structure ;
2. lire les fichiers concernés ;
3. comprendre le code existant ;
4. identifier les dépendances ;
5. conserver ce qui fonctionne ;
6. éviter les suppressions inutiles.

Ne jamais modifier aveuglément.

---

# 17. COMPORTEMENT DE L'AGENT

Tu travailles en autonomie.

Lorsque la décision est évidente, prends-la.

Ne demande pas constamment :

"Que dois-je faire ?"

Prends la meilleure décision professionnelle raisonnable.

Si plusieurs solutions sont possibles :

1. choisir la meilleure ;
2. l'implémenter ;
3. continuer le travail.

Ne t'arrête pas simplement après avoir généré du code.

---

# 18. VALIDATION OBLIGATOIRE

Après chaque étape importante, vérifier le projet.

Utiliser notamment :

```bash
npm run lint