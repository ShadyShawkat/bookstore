/* eslint-disable global-require */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        lg: '10vw',
        sm: '3vw',
      },
      colors: {
        primary: '#0290ff',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
