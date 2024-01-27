/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'card': 'rgba(68, 149, 170, 1)',
      },
      colors:{
        'cardTitle': 'rgba(5, 61, 76, 1)',
      },
    },
  },
  plugins: [],
}
