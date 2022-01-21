module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        lg: '10vw',
        sm: '3vw',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
