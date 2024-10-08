/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        // primary:'#f97432',
        primary:'#1f385e',
        // secondary: '#ffac4a',
        secondary: '#497cb0',
        background:'#A7D49B',
        c1:'#def3ff',
        c2:'#334a72'
      }
    },
  },
  plugins: [],
}