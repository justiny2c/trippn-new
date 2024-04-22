/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // "./src/index.js",
    "./src/**/*.{js,jsx,ts,tsx}", "./index.html" // Adjust this path if your source files reside elsewhere
  ],
  theme: {
    extend: {},
  },
  plugins: [
    
  ]
  // plugins: [require('@tailwindcss/forms')],
}
