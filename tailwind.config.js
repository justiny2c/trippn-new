/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
const colors = require('tailwindcss/colors')

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html" // Adjust this path if your source files reside elsewhere
  ],
  theme: {
    screens: {
      'md': '768px',
      // => @media (min-width: 768px) { ... }
    },
    extend: {
      fontFamily: {
        sans: ["Saira"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      },
      // colors
    }
  },
  plugins: []
  // plugins: [require('@tailwindcss/forms')],
})
