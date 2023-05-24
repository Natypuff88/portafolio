const path = require('path');

module.exports = {
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
