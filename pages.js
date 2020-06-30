/* eslint-disable no-undef */
const pagesList = {
  index: {
    chunk: './src/profiler/index.tsx',
    js: [],
    css: [],
    title: 'Profiler',
    favicon: '',
    meta: {
      viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
      'theme-color': '#14fad1',
    },
    scriptLoading: 'blocking',
  },
};

module.exports.pages = { ...pagesList };
