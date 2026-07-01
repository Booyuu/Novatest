import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        nova: {
          black: '#050609',
          charcoal: '#0b0f19',
          panel: '#111827',
          silver: '#c7d2e5',
          blue: '#1d4ed8',
          purple: '#7c3aed',
        },
      },
      boxShadow: {
        glow: '0 0 60px rgba(89, 101, 241, 0.22)',
      },
      backgroundImage: {
        'radial-grid': 'radial-gradient(circle at top left, rgba(124,58,237,.28), transparent 34%), radial-gradient(circle at 75% 10%, rgba(29,78,216,.24), transparent 28%)',
      },
    },
  },
  plugins: [],
};
export default config;
