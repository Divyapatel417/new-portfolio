/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      'sm': '400px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      
    },
    fontSize: {
      sm: ['14px', {
        lineHeight: '122x',
        letterSpacing: '-0.01em',
        fontWeight: '600',
      }],
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
      divi: ['90px', {
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
        'darkertext':'#64748b', 
      },
      dropShadow: {
        'md': '0 25px 25px rgba(0, 0, 0, 0.25)',
       
      }
    },
  },
  plugins: [],
}

