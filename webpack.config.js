const config = {
  entry: ['src/app.js'],
  output: {
    filename: '[name].[hash].js',
    path: 'dist',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      hash: false,
      filename: 'index.html',
      inject: 'body',
      minify: {
        collapseWhitespace: true
      }
    })
  ],
  module: {
    loaders: []
  }
};

module.exports = config;
