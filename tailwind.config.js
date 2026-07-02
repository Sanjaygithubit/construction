/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        graphite: 'var(--graphite)',
        rust: 'var(--rust)',
        brass: 'var(--brass)',
        concrete: 'var(--concrete)',
        paper: 'var(--paper)',
        ink: 'var(--ink)'
      },
      fontFamily: {
        sans: ['IBM Plex Sans', 'sans-serif'],
        serif: ['IBM Plex Serif', 'serif'],
        mono: ['IBM Plex Mono', 'monospace']
      }
    }
  },
  plugins: []
};
