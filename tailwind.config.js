/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        backgroundB: "#ffffff",
        primary: "#000000",
        primtext: "#ffffff",
        primtextB: "#000000"
      }
    },
  },
  plugins: [],
}