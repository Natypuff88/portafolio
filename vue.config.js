const path = require('path');

module.exports = {
  publicPath: './',
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "~@/assets/css/variables.scss";`
      },
    }
  },

  transpileDependencies: [
    'vuetify'
  ]
};
