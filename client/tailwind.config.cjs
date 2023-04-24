/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        primary: theme('colors.blue.500'),
        secondary: theme('colors.gray.200'),
      }),
      textColor: (theme) => ({
        primary: theme('colors.blue.500'),
        secondary: theme('colors.gray.600'),
      }),
      borderColor: (theme) => ({
        DEFAULT: theme('colors.gray.300'),
        primary: theme('colors.blue.500'),
        secondary: theme('colors.gray.200'),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
