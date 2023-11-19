/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   boxShadow: {
    shadow: '0px -1px 36px 0px rgba(0,0,0,0.75),0px -1px 36px 0px rgba(0,0,0,0.75), 0px -1px 36px 0px rgba(0,0,0,0.75)'
  },
   }
    },
  plugins: [],
}

