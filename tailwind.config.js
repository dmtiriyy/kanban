/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{
        "mainBackgroundColor": "#161321",
        "columnBackgroundColor": "#35542e",
        "inputBackgroundColor": "#171f2b"
      }
    },
  },
  plugins: [],
}

