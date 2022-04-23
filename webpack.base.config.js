const options = [
  transformAssetUrls: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
    'b-avatar': 'src',
    'b-img': 'src',
    'b-img-lazy': ['src', 'blank-src'],
    'b-card': 'img-src',
    'b-card-img': 'src',
    'b-card-img-lazy': ['src', 'blank-src'],
    'b-carousel-slide': 'img-src',
    'b-embed': 'src'
  }, 
];
const module =  {
  rules: [
    ...(config.dev.useEslint ? [createLintingRule()] : []),
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: vueLoaderConfig
    },
    {
      test: /\.js$/,
      loader: 'babel-loader',
      include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
    },
    {
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('img/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('media/[name].[hash:7].[ext]')
      }
    },
    {
      test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
      loader: 'url-loader',
      options: {
        limit: 10000,
        name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
      }
    },
    { //Lo anterior no se modifica, esta es la configuración de sass
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },
    {
      test: /\.css/,
      use: ['vue-style-loader', 'css-loader', 'sass-loader'] // BOTH are needed!
    }
  ]
};