// Toutes les données des 3 burgers de la carte sont centralisées ici.
// Pour ajouter/modifier un burger ou une couche, il suffit d'éditer ce fichier :
// aucun composant n'a besoin d'être touché.
//
// type de couche -> utilisé pour la couleur dans <ExplodedView />
// 'bun' | 'protein' | 'cheese' | 'veg' | 'sauce' | 'special'

export const burgers = [
  {
    id: 'toulousain',
    tag: 'Le burger signature',
    name: 'Burger Toulousain',
    teaser:
      "L'emblème de la maison. Pain rouge et noir, tomme des Pyrénées, jambon de pays — une identité assumée.",
    intro:
      "Le pain rouge et noir est une référence visuelle à la ville et à son identité — sans référence directe à une marque ou à un club.",
    layers: [
      { visual: 'painNoir', name: 'Pain noir (haut)', desc: 'Encre de seiche, pour une identité visuelle forte.' },
      { visual: 'sauceDrizzleRed', name: 'Sauce Sud-Ouest', desc: 'Légèrement relevée. Une référence à la région.' },
      { visual: 'onion', name: 'Oignons confits', desc: 'Cuits longuement, sucrés et fondants.' },
      { visual: 'cheeseRind', name: 'Tomme des Pyrénées', desc: 'Une affirmation du terroir du Sud-Ouest.' },
      { visual: 'patty', name: 'Steak de bœuf épais', desc: 'Une pièce généreuse, cuite avec précision.' },
      { visual: 'ham', name: 'Jambon de pays grillé', desc: 'Grillé pour intensifier son caractère.' },
      { visual: 'leaf', name: 'Roquette', desc: 'Une pointe de piquant, en légèreté.' },
      { visual: 'painRouge', name: 'Pain rouge (bas)', desc: 'Betterave, en écho au pain noir. Le duo signature.' },
    ],
  },
  {
    id: 'italien',
    tag: 'Le burger frais',
    name: 'Burger Italien',
    teaser:
      'Plus léger, toujours généreux. Mozzarella fondante, tomates confites, pesto crémeux.',
    intro:
      'Plus frais, plus léger, toujours généreux — une autre facette de la maison.',
    layers: [
      { visual: 'bunTop', name: 'Bun brioché', desc: 'Moelleux, légèrement doré, toasté à la commande.' },
      { visual: 'sauceDrizzleCream', name: 'Sauce crémeuse au pesto', desc: 'Fraîche, parfumée, discrètement crémeuse.' },
      { visual: 'parmesan', name: 'Copeaux de parmesan', desc: 'Une touche saline et affinée.' },
      { visual: 'leaf', name: 'Roquette', desc: 'Une pointe de piquant, en légèreté.' },
      { visual: 'tomato', name: 'Tomates confites', desc: 'Douces, concentrées, cuites longuement.' },
      { visual: 'cheeseDrip', name: 'Mozzarella fondante', desc: 'Filante, généreuse, sans excès.' },
      { visual: 'patty', name: 'Steak de bœuf épais', desc: 'Une pièce généreuse, cuite avec précision.' },
      { visual: 'bunBottom', name: 'Bun brioché', desc: 'Base identique, pour un équilibre parfait.' },
    ],
  },
  {
    id: 'smash',
    tag: 'Le burger accessible',
    name: 'Burger Smash',
    teaser:
      "Simple. Ultra maîtrisé. Deux steaks smashés, un cheddar affiné, une sauce pensée pour lui seul.",
    intro:
      "Le burger accessible. Simple, ultra maîtrisé — chaque couche est là pour renforcer la précédente, sans effet inutile.",
    layers: [
      { visual: 'bunTop', name: 'Bun brioché', desc: 'Moelleux, légèrement doré, toasté à la commande.' },
      { visual: 'patty', name: 'Double steak smash', desc: 'Deux steaks pressés à la plancha, croûte caramélisée.' },
      { visual: 'cheeseDrip', name: 'Cheddar affiné', desc: 'Fondu lentement, pour une texture parfaite.' },
      { visual: 'onion', name: 'Oignons confits', desc: 'Cuits longuement, sucrés et fondants.' },
      { visual: 'pickle', name: 'Pickles', desc: "Acidité franche, pour l'équilibre." },
      { visual: 'sauceDrizzleRed', name: 'Sauce Originale', desc: 'La signature. Créée pour ce burger uniquement.' },
      { visual: 'leaf', name: 'Salade', desc: 'Fraîcheur et croquant en finale.' },
      { visual: 'bunBottom', name: 'Bun brioché', desc: 'Base identique, pour un équilibre parfait.' },
    ],
  },
]

export const menu = {
  burgers: ['Burger Toulousain', 'Burger Italien', 'Burger Smash'],
  accompagnements: ['Frites Signature', 'Tenders'],
  sauces: ['Sauce Originale', 'Sauce Sud-Ouest'],
  boissons: ['Sélection classique'],
}

export const roadmap = [
  { label: 'Idée', done: true },
  { label: 'Carte', done: true },
  { label: 'Tests recettes', done: false },
  { label: 'Branding final', done: false },
  { label: 'Shooting photo', done: false },
  { label: 'Prototype', done: false },
  { label: 'Lancement', done: false },
]
