/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'black': '#000',
      'white': '#fff',
      'grey200': '#F5F5F5',
      'grey300': '#EEEEEE',
      'grey400': '#9D9D9D',
      'grey500': '#707070',
      'grey900': '#1E1E1E',
      'primaryBlue': '#2D2DEA',
      'lightBlue': '#9090FB',
      'red': '#EF6A6A'
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

