// Bibliothèque d'icônes d'ingrédients : un visuel distinct par type d'ingrédient
// (pain, steak, fromage, sauce...) plutôt que de simples barres de couleur.
// Le SVG interne est injecté via dangerouslySetInnerHTML car il est 100% statique
// (pas de contenu utilisateur) : cela évite de retranscrire à la main des dizaines
// d'attributs SVG en JSX (stroke-width -> strokeWidth, etc.) pour un gain nul.
//
// Pour ajouter un nouvel ingrédient : ajouter une entrée `{ h, svg }` ci-dessous,
// puis référencer sa clé dans `visual` pour la couche concernée dans data/burgers.js.

const tomatoSlices = [55, 120, 185, 250]
  .map(
    (cx) => `
    <circle cx="${cx}" cy="12" r="9" fill="url(#gradTomato)"/>
    <line x1="${cx}" y1="5" x2="${cx}" y2="19" stroke="rgba(0,0,0,.3)" stroke-width="1"/>
    <line x1="${cx - 6}" y1="8" x2="${cx + 6}" y2="16" stroke="rgba(0,0,0,.3)" stroke-width="1"/>
    <line x1="${cx - 6}" y1="16" x2="${cx + 6}" y2="8" stroke="rgba(0,0,0,.3)" stroke-width="1"/>`
  )
  .join('')

const onionRings = [70, 150, 230]
  .map((cx) => `<ellipse cx="${cx}" cy="10" rx="34" ry="7" fill="none" stroke="url(#gradOnion)" stroke-width="2.5"/>`)
  .join('')

const pickleSlices = [36, 96, 156, 216, 276]
  .map(
    (cx) => `
    <ellipse cx="${cx}" cy="10" rx="16" ry="8" fill="url(#gradPickle)"/>
    <line x1="${cx - 6}" y1="5" x2="${cx - 6}" y2="15" stroke="rgba(0,0,0,.2)" stroke-width="1"/>
    <line x1="${cx}" y1="4" x2="${cx}" y2="16" stroke="rgba(0,0,0,.2)" stroke-width="1"/>
    <line x1="${cx + 6}" y1="5" x2="${cx + 6}" y2="15" stroke="rgba(0,0,0,.2)" stroke-width="1"/>`
  )
  .join('')

export const ICONS = {
  bunTop: {
    h: 56,
    svg: `<path d="M4,56 C4,20 40,6 150,6 C260,6 296,20 296,56 Z" fill="url(#gradBun)" stroke="rgba(0,0,0,.12)"/>
      <ellipse cx="95" cy="20" rx="3" ry="2" fill="#b9b0a0"/><ellipse cx="130" cy="14" rx="3" ry="2" fill="#b9b0a0"/>
      <ellipse cx="165" cy="12" rx="3" ry="2" fill="#b9b0a0"/><ellipse cx="200" cy="15" rx="3" ry="2" fill="#b9b0a0"/>
      <ellipse cx="112" cy="26" rx="3" ry="2" fill="#b9b0a0"/><ellipse cx="185" cy="24" rx="3" ry="2" fill="#b9b0a0"/>`,
  },
  bunBottom: { h: 26, svg: `<rect x="6" y="4" width="288" height="18" rx="9" fill="url(#gradBun2)"/>` },
  painNoir: {
    h: 56,
    svg: `<path d="M4,56 C4,20 40,6 150,6 C260,6 296,20 296,56 Z" fill="url(#gradNoirPain)"/>
      <path d="M40,28 Q150,10 260,28" stroke="rgba(245,241,234,.18)" stroke-width="2" fill="none"/>`,
  },
  painRouge: { h: 26, svg: `<rect x="6" y="4" width="288" height="18" rx="9" fill="url(#gradRougePain)"/>` },
  patty: {
    h: 32,
    svg: `<path d="M6,10 L36,6 L72,10 L108,5 L144,9 L180,5 L216,9 L252,6 L288,10 L292,18 L262,24 L226,20 L190,25 L154,20 L118,25 L82,20 L46,24 L8,20 Z" fill="url(#gradPatty)"/>
      <line x1="50" y1="10" x2="76" y2="22" stroke="#000" stroke-opacity=".25" stroke-width="3"/>
      <line x1="120" y1="9" x2="146" y2="22" stroke="#000" stroke-opacity=".25" stroke-width="3"/>
      <line x1="190" y1="10" x2="216" y2="23" stroke="#000" stroke-opacity=".25" stroke-width="3"/>
      <line x1="250" y1="9" x2="270" y2="20" stroke="#000" stroke-opacity=".25" stroke-width="3"/>`,
  },
  ham: {
    h: 20,
    svg: `<path d="M6,10 Q40,2 80,10 Q120,18 160,10 Q200,2 240,10 Q270,16 294,10 L294,15 Q270,21 240,15 Q200,7 160,15 Q120,23 80,15 Q40,7 6,15 Z" fill="url(#gradHam)"/>
      <line x1="60" y1="6" x2="76" y2="17" stroke="#000" stroke-opacity=".18" stroke-width="2"/>
      <line x1="180" y1="6" x2="196" y2="17" stroke="#000" stroke-opacity=".18" stroke-width="2"/>`,
  },
  cheeseDrip: {
    h: 40,
    svg: `<path d="M6,4 L294,4 L294,20 L280,20 Q276,34 270,20 L246,20 Q242,30 236,20 L206,20 Q202,36 196,20 L166,20 Q162,26 156,20 L126,20 Q122,34 116,20 L86,20 Q82,28 76,20 L46,20 Q42,32 36,20 L6,20 Z" fill="url(#gradCheese)"/>`,
  },
  cheeseRind: {
    h: 28,
    svg: `<path d="M6,10 Q20,3 34,9 Q50,3 66,9 Q82,3 98,9 Q114,3 130,9 Q146,3 162,9 Q178,3 194,9 Q210,3 226,9 Q242,3 258,9 Q274,3 290,9 L294,9 L294,26 L6,26 Z" fill="url(#gradRind)"/>`,
  },
  parmesan: {
    h: 24,
    svg: `<rect x="6" y="14" width="288" height="5" rx="2.5" fill="rgba(245,241,234,.12)"/>
      <path d="M50,6 Q56,2 62,6 Q60,13 53,13 Q47,11 50,6 Z" fill="#e4ddcd"/>
      <path d="M110,4 Q118,1 123,6 Q120,12 113,12 Q108,9 110,4 Z" fill="#e4ddcd"/>
      <path d="M170,7 Q177,3 183,7 Q180,14 173,13 Q167,11 170,7 Z" fill="#e4ddcd"/>
      <path d="M230,5 Q237,1 243,6 Q240,13 233,12 Q227,9 230,5 Z" fill="#e4ddcd"/>`,
  },
  tomato: { h: 24, svg: tomatoSlices },
  onion: {
    h: 20,
    svg: `<rect x="6" y="4" width="288" height="12" rx="6" fill="rgba(201,134,47,.1)"/>${onionRings}`,
  },
  pickle: { h: 20, svg: pickleSlices },
  leaf: {
    h: 24,
    svg: `<path d="M6,12 Q20,3 34,12 Q48,21 62,12 Q76,3 90,12 Q104,21 118,12 Q132,3 146,12 Q160,21 174,12 Q188,3 202,12 Q216,21 230,12 Q244,3 258,12 Q272,21 286,12 L294,12 L294,16 Q280,9 266,16 Q252,23 238,16 Q224,9 210,16 Q196,23 182,16 Q168,9 154,16 Q140,23 126,16 Q112,9 98,16 Q84,23 70,16 Q56,9 42,16 Q28,23 14,16 L6,16 Z" fill="url(#gradLeaf)"/>`,
  },
  sauceDrizzleRed: {
    h: 16,
    svg: `<rect x="6" y="6" width="288" height="5" rx="2.5" fill="rgba(245,241,234,.08)"/>
      <path d="M10,8 Q30,2 50,8 Q70,14 90,8 Q110,2 130,8 Q150,14 170,8 Q190,2 210,8 Q230,14 250,8 Q270,2 290,8" fill="none" stroke="url(#gradSauceRed)" stroke-width="3" stroke-linecap="round"/>`,
  },
  sauceDrizzleCream: {
    h: 16,
    svg: `<rect x="6" y="6" width="288" height="5" rx="2.5" fill="rgba(245,241,234,.08)"/>
      <path d="M10,8 Q30,2 50,8 Q70,14 90,8 Q110,2 130,8 Q150,14 170,8 Q190,2 210,8 Q230,14 250,8 Q270,2 290,8" fill="none" stroke="url(#gradSauceCream)" stroke-width="3" stroke-linecap="round"/>`,
  },
}

export default function IngredientIcon({ visual, className = '' }) {
  const icon = ICONS[visual]
  if (!icon) return null
  return (
    <svg viewBox={`0 0 300 ${icon.h}`} className={className} dangerouslySetInnerHTML={{ __html: icon.svg }} />
  )
}
