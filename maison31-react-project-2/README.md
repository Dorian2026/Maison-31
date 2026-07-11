# Maison 31 — site de présentation conceptuelle

Site vitrine pour un projet de dark kitchen premium (burgers), pensé pour être
présenté à des investisseurs/associés. React + Tailwind CSS + Framer Motion.

## Lancer le projet en local

```bash
npm install
npm run dev
```

Puis ouvrir l'URL indiquée dans le terminal (en général http://localhost:5173).

Pour générer la version de production :

```bash
npm run build
npm run preview
```

## Structure du projet

```
src/
  App.jsx                  → assemble toutes les sections, gère l'état de la vue éclatée
  index.css                → Tailwind + quelques classes utilitaires partagées (.eyebrow, .btn-outline...)
  data/
    burgers.js              → TOUTES les données des 3 burgers, de la carte et de la roadmap.
                               Pour ajouter un burger, un ingrédient ou changer un texte : éditer ce
                               fichier uniquement, aucun composant n'a besoin d'être touché.
  components/
    Nav.jsx                 → navigation fixe
    Hero.jsx                → section plein écran d'ouverture (+ parallax léger)
    Vision.jsx               → la philosophie du projet (5 points)
    Menu.jsx                 → "La carte", présentation des familles de produits, sans prix
    BurgerShowcase.jsx       → grille des 3 burgers (déclenche l'ouverture de la vue éclatée)
    ExplodedView.jsx         → LA section signature : l'animation de "vue éclatée" d'un burger
    Sauces.jsx                → mise en avant des 2 sauces
    Roadmap.jsx               → timeline du projet (fait / à venir)
    Footer.jsx                 → pied de page minimaliste
```

## Modifier le contenu

- **Textes de la carte, des burgers, ingrédients, roadmap** → `src/data/burgers.js`
- **Couleurs** → `tailwind.config.js` (objet `theme.extend.colors`). La palette est
  volontairement restreinte à 4 couleurs nommées (noir, rouge, blanc cassé, anthracite) :
  le rouge ne doit servir qu'à l'accent, jamais en fond large.
- **Typographies** → `tailwind.config.js` (`theme.extend.fontFamily`) + les balises
  `<link>` Google Fonts dans `index.html`.

## Images

Toutes les images du site sont actuellement des placeholders vectoriels (SVG,
composés directement en CSS/JS dans `Hero.jsx`), volontairement sobres et dans la
palette de la marque plutôt que des photos de banque d'images génériques.

Pour les remplacer par de vraies photos ou des visuels générés par IA :
1. Ajouter les fichiers dans `src/assets/` (dossier à créer).
2. Les importer dans le composant concerné (`Hero.jsx` pour le visuel principal),
   puis remplacer le SVG placeholder par une balise `<img>`.

## Aller plus loin

Idées d'évolutions naturelles pour ce projet, une fois le concept validé :
- Ajouter une vraie page "La carte" avec ancre dédiée si le contenu s'étoffe.
- Remplacer les SVG placeholders par un vrai shooting produit.
- Ajouter un formulaire de contact discret pour les investisseurs/partenaires (section dédiée,
  hors scope de la version actuelle qui reste volontairement un site de présentation).
