module.exports = {
  purge: {
    content: ["./_site/css/main.css"],
    options: {
      whitelist: [],
    },
  },
  variants: {},
  plugins: [],
  future: {
    removeDeprecatedGapUtilities: true,
  },
};