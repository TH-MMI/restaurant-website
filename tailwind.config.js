const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        'color1' : "#131417",
        'color2' : "#101112",
      },
      fontFamily: {
        libre: ['"Lugrasimo"', ...defaultTheme.fontFamily.sans],
        quote: ['"Pacifico"', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}