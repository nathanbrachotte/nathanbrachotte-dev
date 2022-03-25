const colors = require('./colors')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ...colors.light,
      },
    },
  },
  plugins: [],
}