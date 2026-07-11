// Gradients SVG partagés par toutes les icônes d'ingrédients (IngredientIcon.jsx).
// Rendu une seule fois (dans App.jsx), invisible, référencé partout via fill="url(#id)".
export default function SharedDefs() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
      <defs>
        <linearGradient id="gradBun" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f5f1ea" />
          <stop offset="100%" stopColor="#d9d2c4" />
        </linearGradient>
        <linearGradient id="gradBun2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d9d2c4" />
          <stop offset="100%" stopColor="#b9b0a0" />
        </linearGradient>
        <linearGradient id="gradNoirPain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3a3530" />
          <stop offset="100%" stopColor="#141210" />
        </linearGradient>
        <linearGradient id="gradRougePain" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#c81d25" />
          <stop offset="100%" stopColor="#7a1015" />
        </linearGradient>
        <linearGradient id="gradPatty" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3f3a34" />
          <stop offset="100%" stopColor="#1d1a15" />
        </linearGradient>
        <linearGradient id="gradHam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9c3f3a" />
          <stop offset="100%" stopColor="#6e2420" />
        </linearGradient>
        <linearGradient id="gradCheese" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f0e9d8" />
          <stop offset="100%" stopColor="#d9c99a" />
        </linearGradient>
        <linearGradient id="gradRind" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e4ddcd" />
          <stop offset="100%" stopColor="#b7ae9c" />
        </linearGradient>
        <linearGradient id="gradTomato" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#d3453f" />
          <stop offset="100%" stopColor="#8a1216" />
        </linearGradient>
        <linearGradient id="gradOnion" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c9862f" />
          <stop offset="100%" stopColor="#8a5a1f" />
        </linearGradient>
        <linearGradient id="gradPickle" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#7d8a5a" />
          <stop offset="100%" stopColor="#565f3c" />
        </linearGradient>
        <linearGradient id="gradLeaf" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5f7a4a" />
          <stop offset="100%" stopColor="#3d5230" />
        </linearGradient>
        <linearGradient id="gradSauceRed" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#c81d25" />
          <stop offset="100%" stopColor="#e8555c" />
        </linearGradient>
        <linearGradient id="gradSauceCream" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#d9c99a" />
          <stop offset="100%" stopColor="#f0e9d8" />
        </linearGradient>
      </defs>
    </svg>
  )
}
