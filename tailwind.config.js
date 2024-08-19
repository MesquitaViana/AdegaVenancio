/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    fontFamily:{
      'sans': ['Poppins', 'sans-serif']
    },
    extend: {
      backgroundImage:{
        "home": "url('/assets/bg.png')"
      },
      colors:{
            'custom-yellow': '#F1CA39',
      }
    },
  },
  plugins: [],
}
