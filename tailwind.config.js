/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6D28D9",
          secondary : "#422B4A",
          header: "#55415C"
      }
    },
  },
  plugins: [],
}

