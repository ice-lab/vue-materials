const path = require('path');

module.exports = {
  publicPath: './',
  lintOnSave: false,
  filenameHashing: false,
  css: {
    extract: true,
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      library: 'icestark-vue-demo',
      libraryTarget: 'umd',
    }
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
};
