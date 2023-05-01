/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',

    // Or if using `src` directory:
    './src/**/*.{ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#a755ff',
          black: '#202124',
          white: '#e2d8ed',
        },
      },
      fontFamily: {
        title: ['var(--font-changa)'],
        text: ['var(--font-josefin)'],
      },
      screens: {
        'sm': '576px',
        '2xl': '1600px',
      },
      keyframes: {
        'open-menu': {
          '0%': { transform: 'scaleY(0)' },
          '100%': { transform: 'scaleY(1)' },
        },
        shake: {
          '0%': { 'margin-left': '0' },
          '25%': { 'margin-left': '0.75rem' },
          '50%': { 'margin-left': '0' },
          '75%': { 'margin-left': '-0.75rem' },
          '100%': { 'margin-left': '0' },
        },
        progress: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
      },
      animation: {
        'open-menu': 'open-menu 0.75s ease-in-out',
        shake: 'shake 0.75s infinite ease-in-out',
        progress: 'progress 10s ease-in-out',
      },
      backgroundImage: {
        small: 'url(/small.webp)',
        medium: 'url(/medium.webp)',
        big: 'url(/big.webp)',
      },
    },
  },
  plugins: [],
}
