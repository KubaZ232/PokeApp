/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: { 
        backgroundImage: (theme) => ({
        poke: "url('/pokebackground.jpg')",
        poke2: "url('/poke2.png')",
      }),
      colors: {
        'pokeBlack': '#111111',
        'poke-emerald' : '#059669',
        'poke-emerald-strong' : '#064e3b',
        'poke-grey' : '#d4d4d4',
        'poke-red' : '#f43f5e',
        'poke-red-strong' : '#991b1b',
        'poke-yellow': '#fefce8',
      },
      screens: {
        'laptop': [
          {'min': '668px', 'max': '1537px'},
        ],
        'customMobile' : [
          {'max': '667px'}
        ],
      }
    },
  },
  plugins: [] ,
}
