/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'vue-light': '#42b883',
        'vue-dark': '#35495e'
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
