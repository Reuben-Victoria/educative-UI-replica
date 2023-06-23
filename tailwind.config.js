/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brands: {
          primary: '#0345fc',
        },
      },
    },
  },
  plugins: [],
};
