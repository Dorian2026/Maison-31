import { motion } from 'framer-motion'
import { burgers } from '../data/burgers.js'

// Grille de sélection. Le clic remonte l'id du burger choisi au parent (App),
// qui affiche ensuite <ExplodedView /> par-dessus.
export default function BurgerShowcase({ onSelect }) {
  return (
    <section id="burgers" className="section-pad pt-0">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
          className="max-w-xl mb-16"
        >
          <div className="eyebrow">Les burgers</div>
          <h2 className="font-display text-3xl md:text-5xl mb-5">Chaque burger, décomposé.</h2>
          <p className="text-blanc-dim">
            Cliquez sur un burger pour ouvrir sa vue éclatée — chaque couche existe pour une raison
            précise.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1], delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 border border-white/10"
        >
          {burgers.map((b) => (
            <button
              key={b.id}
              onClick={() => onSelect(b.id)}
              className="group text-left bg-noir hover:bg-noir-2 transition-colors duration-500 p-10 md:p-12"
            >
              <span className="block font-mono text-[11px] tracking-[0.12em] uppercase text-rouge mb-5">
                {b.tag}
              </span>
              <h3 className="font-display text-2xl mb-4">{b.name}</h3>
              <p className="text-sm text-blanc-dim leading-relaxed mb-8">{b.teaser}</p>
              <span className="inline-flex items-center gap-2.5 font-mono text-[11px] tracking-[0.1em] uppercase text-blanc/70">
                <span className="w-[18px] h-[18px] rounded-full border border-white/40 flex items-center justify-center text-[11px] transition-transform duration-300 group-hover:rotate-90 group-hover:border-rouge">
                  +
                </span>
                Voir la vue éclatée
              </span>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
