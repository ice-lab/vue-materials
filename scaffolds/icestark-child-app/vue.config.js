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
    },
    devServer: {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'content-type',
        'Access-Control-Allow-Methods': 'DELETE,PUT,POST,GET,OPTIONS',
      },
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
};
