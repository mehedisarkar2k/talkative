/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      purple: '#0190ea',
      red: {
        DEFAULT: "#df5653",
        100: "#cb8f92",
        900: "#453839"
      },
      green: {
        DEFAULT: '#2ac769',
        100: '#a2d9b1',
      },
      grey: {
        DEFAULT: '#ecedf5',
        100: '#f7fafc',
        300: '#b7c0d8',
        600: '#b6adbd',
      },
      black: '#373748',
    },
    extend: {},
  },
  plugins: [],
}
