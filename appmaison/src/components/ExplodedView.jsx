import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import IngredientIcon from './IngredientIcon.jsx'

const EASE = [0.16, 0.8, 0.24, 1]

// Une "ligne" = icône illustrée de l'ingrédient + ligne de rappel + libellé.
// Au repos (avant ouverture), chaque icône part d'une position resserrée vers le
// centre de la pile (effet "burger assemblé"), puis s'écarte vers sa position
// finale à l'ouverture (effet "éclatement"), avec un décalage (`delay`) croissant
// par couche pour créer une cascade.
function Row({ layer, index, total, hoveredIndex, setHoveredIndex }) {
  const center = (total - 1) / 2
  const assembleOffset = (center - index) * 30
  const delay = index * 0.09
  const dimmed = hoveredIndex !== null && hoveredIndex !== index

  return (
    <div
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="flex items-center transition-opacity duration-300"
      style={{ opacity: dimmed ? 0.4 : 1 }}
    >
      <motion.div
        className="w-[120px] sm:w-[170px] flex-shrink-0"
        style={{ filter: 'drop-shadow(0 8px 10px rgba(0,0,0,.4))' }}
        initial={{ opacity: 0.3, y: assembleOffset, scale: 0.88 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: EASE, delay }}
      >
        <IngredientIcon visual={layer.visual} className="w-full" />
      </motion.div>

      <motion.div
        className="h-px mx-3 sm:mx-4 w-[22px] sm:w-[46px] flex-shrink-0"
        style={{
          background: 'linear-gradient(90deg, rgba(245,241,234,.55), rgba(245,241,234,.05))',
          transformOrigin: 'left',
        }}
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.5, ease: EASE, delay: delay + 0.22 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, ease: EASE, delay: delay + 0.34 }}
        className="flex flex-col gap-1"
      >
        <div className="flex items-baseline gap-3">
          <span className="font-mono text-[11px] text-rouge">{String(index + 1).padStart(2, '0')}</span>
          <span className="font-display text-base">{layer.name}</span>
        </div>
        <p className="text-[13px] text-blanc-dim leading-snug max-w-[280px]">{layer.desc}</p>
      </motion.div>
    </div>
  )
}

// `burger` est un objet issu de src/data/burgers.js, ou null si aucune vue n'est ouverte.
export default function ExplodedView({ burger, onClose }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <AnimatePresence onExitComplete={() => setHoveredIndex(null)}>
      {burger && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="fixed inset-0 z-[200] bg-noir/[0.97] overflow-y-auto"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <button
            onClick={onClose}
            className="fixed top-8 right-8 z-10 font-mono text-[11px] tracking-[0.14em] uppercase opacity-70 hover:opacity-100 transition-opacity"
          >
            Fermer ✕
          </button>

          {/* Le contenu est volontairement décalé vers la gauche de l'écran plutôt
              que centré : la pile d'ingrédients reste ancrée à gauche, les libellés
              se déploient vers la droite, comme un vrai schéma technique annoté. */}
          <div className="min-h-full flex items-center">
            <div className="w-full max-w-[660px] ml-0 md:ml-[8%] px-6 md:pl-0 md:pr-8 py-28">
              <div className="mb-12">
                <span className="block font-mono text-[11px] tracking-[0.14em] uppercase text-rouge mb-3.5">
                  {burger.tag}
                </span>
                <h3 className="font-display text-3xl md:text-4xl mb-3.5">{burger.name}</h3>
                <p className="text-blanc-dim text-sm max-w-[52ch] leading-relaxed">{burger.intro}</p>
              </div>

              <div className="flex flex-col gap-4">
                {burger.layers.map((layer, i) => (
                  <Row
                    key={i}
                    layer={layer}
                    index={i}
                    total={burger.layers.length}
                    hoveredIndex={hoveredIndex}
                    setHoveredIndex={setHoveredIndex}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
