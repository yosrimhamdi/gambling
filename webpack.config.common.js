module.exports = {
  mode: process.env.NODE_ENV,
  entry: {
    'landing-page-1': '/src/sass/landing-page-1.sass',
    'landing-page-2': '/src/sass/landing-page-2.sass',
    'landing-page-3': [
      '/src/sass/landing-page-3.sass',
      '/src/js/toggle-popup.js',
    ],
    'landing-page-4': [
      '/src/sass/landing-page-4.sass',
      '/src/js/toggle-popup.js',
    ],
  },
};
