module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          950: '#223645'
        },
        red: {
          950: '#E12454'
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
