module.exports = {
  purge: {
    enabled: true,
    content: [
      './public/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.tsx',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    fontWeight: ['hover'],
    extend: {},
  },
  plugins: [],
};
