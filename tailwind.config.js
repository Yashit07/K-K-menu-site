/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./pages/**/*.html"],
  theme: {
    extend: {
      colors: {
        'brown-950': '#2D1810',
        'brown-900': '#3D2418',
        'brown-800': '#4D3020',
        'amber': {
          400: '#F5C842',
          500: '#D4AF37',
          600: '#C5A028',
        },
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dm-sans': ['DM Sans', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brown': 'linear-gradient(135deg, #2D1810 0%, #3D2418 100%)',
      },
    },
  },
  plugins: [],
}