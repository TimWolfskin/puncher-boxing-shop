/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["Montserrat", "sans-serif"],
        logo: ["Raleway", "sans-serif"],
        links: ["Teko", "sans-serif"],
      }
    },
  },
  plugins: [],
}
