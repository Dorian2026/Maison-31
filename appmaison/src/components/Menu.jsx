import { motion } from 'framer-motion'
import { menu } from '../data/burgers.js'

const columns = [
  { title: 'Burgers', items: menu.burgers },
  { title: 'Accompagnements', items: menu.accompagnements },
  { title: 'Sauces', items: menu.sauces },
  { title: 'Boissons', items: menu.boissons },
]

export default function Menu() {
  return (
    <section id="carte" className="pb-24 md:pb-36">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
          className="max-w-xl mb-16"
        >
          <div className="eyebrow">La carte</div>
          <h2 className="font-display text-3xl md:text-5xl mb-5">Volontairement courte.</h2>
          <p className="text-blanc-dim">Quatre familles de produits. Rien de superflu.</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1], delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10"
        >
          {columns.map((col) => (
            <div key={col.title} className="bg-noir p-8">
              <h4 className="font-mono text-[11px] tracking-[0.14em] uppercase text-rouge mb-6">
                {col.title}
              </h4>
              <ul>
                {col.items.map((item, i) => (
                  <li
                    key={item}
                    className={`font-display text-lg py-3.5 ${i !== 0 ? 'border-t border-white/10' : ''}`}
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
