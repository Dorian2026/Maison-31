// Navigation fixe, minimaliste. mix-blend-mode permet au wordmark de rester
// lisible aussi bien sur le hero sombre que sur les sections claires.
const links = [
  { href: '#vision', label: 'Concept' },
  { href: '#carte', label: 'La carte' },
  { href: '#burgers', label: 'Burgers' },
  { href: '#sauces', label: 'Sauces' },
  { href: '#roadmap', label: 'Roadmap' },
]

export default function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-6 md:px-10 py-6 md:py-7 mix-blend-difference">
      <div className="font-display text-base tracking-[0.14em] font-medium">MAISON 31</div>
      <nav className="hidden md:flex gap-9 font-mono text-[11px] tracking-[0.12em] uppercase">
        {links.map((l) => (
          <a key={l.href} href={l.href} className="opacity-70 hover:opacity-100 transition-opacity">
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
