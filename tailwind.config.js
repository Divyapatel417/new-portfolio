/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",],
  theme: {
    fontSize: {
      sm: ['12px', '14px'],
      base: ['16px', {
        lineHeight: '122x',
        letterSpacing: '-0.01em',
        fontWeight: '400',
      }],
      lg: ['23px', {
        lineHeight: '25px',
        letterSpacing: '-0.01em',
        fontWeight: '500',
      }],
      xl: ['48px', {
        lineHeight: '50px',
        letterSpacing: '-0.01em',
        fontWeight: '700',
      }],
    },

    extend: {
      colors: {
        'lightblue': '#243c5a',
        'darkblue': '#0F172A',
        'brighttext': '#e2e8f0',
        'darktext': '#94a3b8',
        'greentext': '#5eead4',

      },
    },
  },
  plugins: [],
}

