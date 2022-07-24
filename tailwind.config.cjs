/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      green: { 100: '#304030', 200: '#6C9460', 300: '#DFE2B6' },
      orange: '#F08448',
      grey: {
        0: '#fff',
        100: '#E8E8E8',
        200: '#dbdbdb',
        300: '#cecece',
        400: '#333',
      },
    },
    fontFamily: {
      en: ['Fjalla One'],
      ch: ['Noto Sans TC'],
    },
    extend: {},
  },
  plugins: [],
};
