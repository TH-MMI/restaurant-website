const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        cardBg : '#eaeaea'
      },
      fontFamily: {
        libre: ['"Lugrasimo"', ...defaultTheme.fontFamily.sans],
        quote: ['"Pacifico"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}