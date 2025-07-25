/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
    '50': '#f1f0ff',
    '100': '#e7e4ff',
    '200': '#d1cdff',
    '300': '#b0a6ff',
    '400': '#8a73ff',
    '500': '#663bff',
    '600': '#5514ff',
    '700': '#4400ff',
    '800': '#3a01d6',
    '900': '#3103af',
    '950': '#1a0077',
        },
        secondary: {
          '50': '#fdf2f8',
          '100': '#fce7f3',
          '200': '#fbcfe8',
          '300': '#f9a8d4',
          '400': '#f472b6',
          '500': '#ec4899',
          '600': '#db2777',
          '700': '#be185d',
          '800': '#9d174d',
          '900': '#831843',
          '950': '#500724',
        },
      },
    },
  },
  plugins: [],
}