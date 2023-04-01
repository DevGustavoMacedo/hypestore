/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}', // Note the addition of the `app` directory.
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',

    // Or if using `src` directory:
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: '#a755ff',
          black: '#202124',
          pink: '#d77ab1',
        },
      },
      fontFamily: {
        title: ['var(--font-changa)'],
        text: ['var(--font-josefin)'],
      },
      screens: {
        '3xl': '1900px',
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
      },
      animation: {
        'open-menu': 'open-menu 0.75s ease-in-out',
        'shake': 'shake 0.75s infinite ease-in-out',
      },
      backgroundImage: {
        desktop: 'url(/assets/desktop.webp)',
        mobile: 'url(/bg-mobile.jpg)',
      },
    },
  },
  plugins: [],
}
