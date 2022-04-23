const path = require('path');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/assets/css/variables.scss";`
      }
    }
  }
};