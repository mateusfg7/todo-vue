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
        'fade-up': 'fade-up .5s 0s',
        'shake': 'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
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
        'shake': {
          '10%, 90%': {
            transform: 'translate3d(-1px, 0, 0)'
          },
          '20%, 80%': {
            transform: 'translate3d(2px, 0, 0)'
          },
          '30%, 50%, 70%': {
            transform: 'translate3d(-4px, 0, 0)'
          },
          '40%, 60%': {
            transform: 'translate3d(4px, 0, 0)'
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/forms')]
}
