// https://github.com/michael-ciniawsky/postcss-load-config
const purgecss = require('@fullhuman/postcss-purgecss')({
  // Specify the paths to all of the template files in your project
  content: [
    './src/**/*.vue',
    './index.html',
  ],

  whitelist: ['body', 'html', 'main'],

  // Include any special characters you're using in this regular expression
  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
});

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-url'),
    require('tailwindcss'),
    require('autoprefixer'),
    // ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
  ],
};
