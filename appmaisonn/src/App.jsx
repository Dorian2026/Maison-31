import { useState } from 'react'
import SharedDefs from './components/SharedDefs.jsx'
import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Vision from './components/Vision.jsx'
import Menu from './components/Menu.jsx'
import BurgerShowcase from './components/BurgerShowcase.jsx'
import ExplodedView from './components/ExplodedView.jsx'
import Sauces from './components/Sauces.jsx'
import Roadmap from './components/Roadmap.jsx'
import Footer from './components/Footer.jsx'
import { burgers } from './data/burgers.js'

export default function App() {
  // Seul état global du site : quel burger est actuellement affiché en vue éclatée (ou null).
  const [openId, setOpenId] = useState(null)
  const openBurger = burgers.find((b) => b.id === openId) ?? null

  return (
    <div className="overflow-x-hidden">
      <SharedDefs />
      <Nav />
      <Hero />
      <Vision />
      <Menu />
      <BurgerShowcase onSelect={setOpenId} />
      <ExplodedView burger={openBurger} onClose={() => setOpenId(null)} />
      <Sauces />
      <Roadmap />
      <Footer />
    </div>
  )
}
