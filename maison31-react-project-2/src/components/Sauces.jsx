import { motion } from 'framer-motion'

const sauces = [
  {
    n: 'Sauce 01',
    name: 'Sauce Originale',
    text: 'Pensée pour le Burger Smash. Ronde, équilibrée, elle relie chaque couche sans jamais dominer.',
  },
  {
    n: 'Sauce 02',
    name: 'Sauce Sud-Ouest',
    text: 'Légèrement relevée, elle porte la signature régionale du Burger Toulousain — sans jamais la nommer.',
  },
]

export default function Sauces() {
  return (
    <section id="sauces" className="section-pad">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
          className="max-w-xl mb-16"
        >
          <div className="eyebrow">Les sauces</div>
          <h2 className="font-display text-3xl md:text-5xl mb-5">Le cœur du projet.</h2>
          <p className="text-blanc-dim">
            Chaque sauce est conçue avant la recette, pas ajoutée après. Les compositions restent
            volontairement non dévoilées.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1], delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10"
        >
          {sauces.map((s) => (
            <div key={s.name} className="group relative overflow-hidden bg-noir p-11 md:p-16">
              <div
                className="absolute w-56 h-56 rounded-full -right-16 -bottom-16 opacity-50 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle, rgba(200,29,37,0.35), transparent 70%)',
                }}
              />
              <div className="eyebrow relative">{s.n}</div>
              <h3 className="font-display text-2xl mb-4 relative">{s.name}</h3>
              <p className="text-sm text-blanc-dim leading-relaxed max-w-[40ch] relative">{s.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
