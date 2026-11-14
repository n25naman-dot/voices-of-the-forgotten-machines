/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        space: {
          950: '#020817',
          900: '#0b1120',
          800: '#111827',
          700: '#1f2937',
          600: '#374151',
          500: '#64748b',
          300: '#9ca3af',
          200: '#e2e8f0',
        },
        accent: {
          cyan: '#67e8f9',
          violet: '#8b5cf6',
          gold: '#fbbf24',
          rose: '#fb7185',
        },
      },
      boxShadow: {
        glow: '0 0 30px rgba(103, 232, 249, 0.25)',
      },
      backgroundImage: {
        'space-grid': 'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.2) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
};
