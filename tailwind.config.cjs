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
      },
    },
  },
  plugins: [],
}