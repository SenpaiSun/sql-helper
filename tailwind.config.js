/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx,ts}'],
  theme: {
    extend: {
      keyframes: {
        'gradient-flow-left': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'gradient-flow-right': {
          '0%': { 'background-position': '100% 50%' },
          '50%': { 'background-position': '0% 50%' },
          '100%': { 'background-position': '100% 50%' },
        },
      },
      animation: {
        'gradient-flow-left': 'gradient-flow-left 1.5s ease infinite',
        'gradient-flow-right': 'gradient-flow-right 1.5s ease infinite',
      },
    },
  },
  plugins: [],
}
