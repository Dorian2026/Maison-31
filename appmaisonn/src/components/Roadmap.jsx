import { motion } from 'framer-motion'
import { roadmap } from '../data/burgers.js'

export default function Roadmap() {
  return (
    <section id="roadmap" className="section-pad pt-0">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: [0.16, 0.8, 0.24, 1] }}
          className="max-w-xl mb-16"
        >
          <div className="eyebrow">Roadmap</div>
          <h2 className="font-display text-3xl md:text-5xl mb-5">Un concept en développement.</h2>
          <p className="text-blanc-dim">Une trajectoire volontairement progressive, du concept au lancement.</p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.06 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl"
        >
          {roadmap.map((step, i) => (
            <motion.div
              key={step.label}
              variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0 } }}
              transition={{ duration: 0.5, ease: [0.16, 0.8, 0.24, 1] }}
              className={`flex items-center gap-5 py-5 border-t border-white/10 ${
                i === roadmap.length - 1 ? 'border-b' : ''
              }`}
            >
              <span
                className={`w-[22px] h-[22px] rounded-full border flex items-center justify-center text-[11px] flex-shrink-0 ${
                  step.done ? 'bg-rouge border-rouge text-blanc' : 'border-white/30'
                }`}
              >
                {step.done && '✓'}
              </span>
              <span className={`font-display text-lg ${step.done ? 'text-blanc' : 'text-blanc-dim'}`}>
                {step.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
