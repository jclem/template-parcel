module.exports = {
  purge: ['src/**/*.postcss', 'src/**/*.js', 'src/**/*.html'],
  variants: {},
  plugins: [],
  future: {
    // https://tailwindcss.com/docs/upcoming-changes
    defaultLineHeights: true,
    purgeLayersByDefault: true,
    removeDeprecatedUtilities: true,
    standardFontWeights: true
  }
}
