/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    // "./src/index.js",
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html" // Adjust this path if your source files reside elsewhere
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Saira"]
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      }
    },
  },
  plugins: [

  ]
  // plugins: [require('@tailwindcss/forms')],
})
