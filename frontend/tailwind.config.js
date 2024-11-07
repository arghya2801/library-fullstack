/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#00c3ff',
        'secondary': '#0d0940',
        'bgcolor': '#ffffff',
        'accent': '#ffe941',
      },
      fontFamily: {
        'primary': ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

