import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'warm-gray': {
          50: '#FAFAE6',   // Couleur très claire
          100: '#F5F5DC',  // Couleur de base
          200: '#ECECD1',  // Légèrement plus sombre
          300: '#E3E3C7',  // Sombre intermédiaire
          400: '#D9D9BC',  // Encore plus sombre
          500: '#CFCFAF',  // Couleur médiane
          600: '#BEBE9E',  // Plus prononcée
          700: '#9E9E80',  // Sombre notable
          800: '#7D7D61',  // Très sombre
          900: '#5D5D43',  // La plus sombre
        },
      },
      fontFamily: {
        sans: ['Lato', 'sans-serif'],
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
