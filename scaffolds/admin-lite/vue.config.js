const path = require('path');

module.exports = {
  publicPath: './',
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@src': path.resolve(__dirname, 'src/'),
        '@config': path.resolve(__dirname, 'src/config/'),
      },
    },
  },
};
