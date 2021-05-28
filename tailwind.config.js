module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        green: {
          '900': '#071207',
          '800': '#163716',
          '700': '#2c6d2d',
          '600': '#41a443',
          '500': '#64c166',
          '400': '#7fcc81',
          '200': '#a4dba5',
          '100': '#dbf0db'
        },
        'tan-100': '#f8f3ed',
        'tan-200': '#eadf77',
        'tan-300': '#d2b48c',
        'tan-400': '#bf935a',
        'tan-500': '#815e32',
        'tan-600': '#5c4324',
        'tan-700': '#49361d',
        'tan-800': '#251b0e',
        'tan-900': '#120d07',
        'pink-alert': '#d1154d'
      }
    },
  },
  variants: {
    extend: {},
  }
};
