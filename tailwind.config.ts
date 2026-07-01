import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        nova: {
          black: '#03050a',
          charcoal: '#080b12',
          panel: '#0d1220',
          line: 'rgba(255,255,255,0.12)',
          silver: '#d8dee9',
          blue: '#1d4ed8',
          purple: '#7c3aed',
        },
      },
      boxShadow: {
        glow: '0 24px 80px rgba(30, 64, 175, 0.28)',
        panel: '0 30px 100px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'radial-stage': 'radial-gradient(circle at top left, rgba(37, 99, 235, 0.28), transparent 34rem), radial-gradient(circle at 80% 10%, rgba(124, 58, 237, 0.18), transparent 30rem), linear-gradient(135deg, #03050a 0%, #07101d 42%, #030712 100%)',
        'grid-lines': 'linear-gradient(rgba(255,255,255,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.045) 1px, transparent 1px)',
      },
      keyframes: {
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseLine: {
          '0%, 100%': { opacity: '0.35' },
          '50%': { opacity: '0.85' },
        },
      },
      animation: {
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'pulse-line': 'pulseLine 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
