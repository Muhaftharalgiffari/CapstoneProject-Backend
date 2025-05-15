/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: "#E63946",
        secondary: "#A8DADC",
        light: "#F1FAEE",
        dark: "#1D3557",
      },
    },
  },
  plugins: [],
} 