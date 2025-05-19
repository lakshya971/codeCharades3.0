/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
        'sans': ['Raleway', 'sans-serif'],
      },
      colors: {
        burgundy: {
          950: '#1A0008',
          900: '#2A000D',
          800: '#3A0012',
          700: '#4A0017',
          600: '#5A001C',
          500: '#7A0026',
          400: '#9A0030',
          300: '#BA003A',
          200: '#DA0044',
          100: '#FA004E',
        },
        gold: {
          500: '#FFBF00',
          400: '#FFD244',
          300: '#FFE588',
          200: '#FFF8CC',
        }
      },
    },
  },
  plugins: [],
};