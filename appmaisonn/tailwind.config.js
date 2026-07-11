/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Palette volontairement restreinte à 4 couleurs nommées (cf. brief).
        // Le rouge ne doit servir qu'à attirer le regard : à utiliser avec parcimonie.
        noir: '#15130f',
        'noir-2': '#1d1a15',
        anthracite: '#2b2723',
        'anthracite-2': '#37322c',
        blanc: '#f5f1ea',
        'blanc-dim': '#d9d2c4',
        rouge: '#c81d25',
        'rouge-dim': '#8a1216',
      },
      fontFamily: {
        // Display : Fraunces, une serif élégante pour les titres (identité premium).
        display: ['Fraunces', 'serif'],
        // Body : Inter, sobre et lisible.
        body: ['Inter', 'sans-serif'],
        // Mono : IBM Plex Mono pour les eyebrows, labels et micro-détails techniques.
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      maxWidth: {
        container: '1180px',
      },
    },
  },
  plugins: [],
}
