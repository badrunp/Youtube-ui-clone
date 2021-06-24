const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        rose: colors.rose
      },
      spacing:{
        '18': '74px'
      }
    },
  },
  variants: {
    extend:{
      overflow: ['hover', 'focus'],
    }
  },
  plugins: [],
}