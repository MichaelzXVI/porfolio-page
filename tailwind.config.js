/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        globalfont: 'Cantarell, sans-serif',
        navfont: 'Finger Paint, sans-serif',
        languagefont: 'Josefin Sans, sans-serif',
        shalomfont: 'Rock Salt, cursive',
        logofont: 'Poppins, sans-serif',
        aboutfont: 'Quicksand, sans-serif',
      },
      colors: {
        aboutBg: '#b9c8dd',
        knowledgeBg: '#c9a165',
        projectsBg: '#ddd9d5',
        projectCardBg: '#0b142d',
        contactmeBg: '#ddd9d5',
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
};
