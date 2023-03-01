/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        heroIMG: "url('bg/BG.jpg')"
      }
    },
  },
  screens: {
    'sm': '576px',
    'md': '768px',
    'lg': '992px',
    'xl': '1200px',
  },
  plugins: [
    require('tailwindcss'),
    require('tailwind-scrollbar')
  ]
}