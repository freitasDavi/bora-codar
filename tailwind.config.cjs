/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      'sans': ["Roboto", "sans-serif", "ui-sans-serif"]
    },
    extend: {
      colors: {
        'theme-900': "#0F0D13",
        "theme-600": "#2A2141",
        "theme-300": "#E1E1E6",
        "theme-200": "#D9D9D9",
        "theme-100": "#C4C4CC"
      }
    },
  },
  plugins: [],
}
