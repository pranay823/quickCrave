/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors :{
        'text_color': '#282C3F',
        'main_color': '#FC8018',
        'light-grey': '#666666',
      },
      fontFamily :{
      
      }
    },
  },
  plugins: [],
}