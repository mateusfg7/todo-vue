/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.vue'],
  theme: {
    extend: {
      colors: {
        'vue-light': '#42b883',
        'vue-dark': '#35495e'
      },
      animation: {
        'fade-up': 'fade-up .5s 0s'
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform:
              'translate(var(--tw-translate-x), 50%) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          },
          '100%': {
            opacity: '1',
            transform:
              'translate(var(--tw-translate-x), 0) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))'
          }
        },
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
