/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        "brandPrimary": "#0077b6",
        "neutralDGrey": "#1e3a8a",
        "neutralGrey": "#717171",
        "neutralSilver": "#F5F7FA",
        "gray900": "#18191F",
        "neutralBlack": "#263238",
      }
    },
  },
  plugins: [require('flowbite/plugin')],
}

