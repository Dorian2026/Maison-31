import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import IngredientIcon from './IngredientIcon.jsx'

// Le burger du hero réutilise les mêmes icônes illustrées que la vue éclatée
// (cohérence visuelle avec la section signature). L'effet de relief ne vient
// d'aucune librairie 3D : c'est un vrai volume obtenu en CSS pur (perspective +
// rotation 3D + léger décalage en profondeur de chaque couche), donc aucun poids
// supplémentaire pour le site.
const HERO_LAYERS = ['bunTop', 'sauceDrizzleRed', 'leaf', 'cheeseDrip', 'patty', 'bunBottom']

export default function Hero() {
  // mx/my suivent la position de la souris (0 à 1). rotateX/rotateY en dérivent
  // avec un léger ressort (spring) pour un mouvement doux, pas de bond brusque.
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const rotateY = useSpring(useTransform(mx, [0, 1], [-30, -2]), { stiffness: 60, damping: 20 })
  const rotateX = useSpring(useTransform(my, [0, 1], [22, 6]), { stiffness: 60, damping: 20 })

  function handleMouseMove(e) {
    mx.set(e.clientX / window.innerWidth)
    my.set(e.clientY / window.innerHeight)
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative min-h-screen grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] items-center gap-10 md:gap-5 px-6 md:px-16 pt-40 pb-20 text-center md:text-left"
      style={{
        backgroundImage:
          'radial-gradient(ellipse 60% 50% at 82% 45%, rgba(200,29,37,0.30), transparent 62%)',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 0.8, 0.24, 1], delay: 0.2 }}
      >
        <div className="eyebrow justify-center md:justify-start">Projet de concept — Toulouse</div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] max-w-none md:max-w-[13ch] mx-auto md:mx-0 mb-6">
          Une nouvelle vision <em className="italic text-rouge">du burger.</em>
        </h1>
        <p className="text-blanc-dim text-base max-w-[34ch] mx-auto md:mx-0 mb-10">
          Projet de concept de dark kitchen premium imaginée à Toulouse.
        </p>
        <a href="#vision" className="btn-outline group">
          Découvrir le concept
          <span className="transition-transform duration-300 group-hover:translate-y-0.5">→</span>
        </a>
      </motion.div>

      {/* perspective: la "profondeur" dans laquelle le burger va tourner */}
      <div className="relative flex items-center justify-center" style={{ perspective: 1000 }}>
        <div
          className="absolute w-[380px] h-[380px] rounded-full blur-sm"
          style={{ background: 'radial-gradient(circle, rgba(200,29,37,0.30), transparent 68%)' }}
        />
        <motion.div
          style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
          animate={{ y: [0, -10, 0] }}
          transition={{ y: { duration: 6, repeat: Infinity, ease: 'easeInOut' } }}
          className="relative w-[min(280px,62vw)] flex flex-col items-center"
        >
          <div
            style={{ filter: 'drop-shadow(0 26px 34px rgba(0,0,0,.5))' }}
            className="w-full flex flex-col items-center"
          >
            {HERO_LAYERS.map((visual, i) => (
              // translateZ décale chaque couche en profondeur : combiné à la rotation
              // 3D du parent, ça donne un vrai sentiment de volume/épaisseur.
              <div key={i} style={{ transform: `translateZ(${i * 5}px)` }} className="w-full -mt-0.5">
                <IngredientIcon visual={visual} className="w-full" />
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 font-mono text-[10px] tracking-[0.2em] uppercase text-blanc-dim">
        <span>Scroll</span>
        <motion.span
          className="w-px h-8 bg-gradient-to-b from-rouge to-transparent"
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </section>
  )
}
