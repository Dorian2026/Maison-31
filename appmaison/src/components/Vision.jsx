import { motion } from 'framer-motion'

// Les 5 points que le visiteur doit comprendre en repartant du site (cf. brief).
// Modifiable librement : chaque item est indépendant.
const points = [
  {
    num: '01',
    title: 'Trois burgers. Aucun compromis.',
    text: "Une carte courte n'est pas une contrainte, c'est un choix. Chaque recette est retravaillée jusqu'à ce qu'il n'y ait plus rien à enlever.",
  },
  {
    num: '02',
    title: 'Une frite. La bonne.',
    text: 'Plutôt que proposer plusieurs versions moyennes, une seule référence, pensée pour être la meilleure possible à chaque service.',
  },
  {
    num: '03',
    title: "La sauce n'est pas un supplément.",
    text: "Elle est conçue avant le burger, pas ajoutée après. C'est elle qui définit l'identité de chaque recette.",
  },
  {
    num: '04',
    title: 'Une signature du Sud-Ouest.',
    text: 'Toulouse influence les produits et les couleurs, sans folklore ni clin d\u2019œil appuyé. Une identité, pas un thème.',
  },
  {
    num: '05',
    title: 'Une dark kitchen, par choix.',
    text: 'Sans salle à gérer, chaque ressource est réinvestie dans le produit : le temps, la technique, la matière première.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 0.8, 0.24, 1] } },
}

export default function Vision() {
  return (
    <section id="vision" className="section-pad">
      <div className="max-w-container mx-auto px-6 md:px-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-xl mb-16 md:mb-20"
        >
          <div className="eyebrow">Notre vision</div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight mb-5">
            Faire moins. Mais faire beaucoup mieux.
          </h2>
          <p className="text-blanc-dim leading-relaxed max-w-[52ch]">
            Chaque décision — la carte, les recettes, l'identité — part d'un seul principe : retirer
            tout ce qui n'est pas essentiel pour que ce qui reste soit exécuté parfaitement.
          </p>
        </motion.div>

        <motion.div
          variants={{ show: { transition: { staggerChildren: 0.08 } } }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10"
        >
          {points.map((p) => (
            <motion.div
              key={p.num}
              variants={fadeUp}
              className="bg-noir hover:bg-noir-2 transition-colors duration-500 p-9"
            >
              <span className="block font-mono text-[11px] tracking-[0.1em] text-rouge mb-6">{p.num}</span>
              <h3 className="text-lg mb-3 leading-snug">{p.title}</h3>
              <p className="text-sm text-blanc-dim leading-relaxed">{p.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
