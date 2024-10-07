/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#f97432',
        secondary: '#ffac4a',
        background:'#ffe9c9'
      }
    },
  },
  plugins: [],
}