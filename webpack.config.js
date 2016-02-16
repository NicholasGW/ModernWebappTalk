var webpack = require('webpack');

module.exports = {

  entry: "./app/main.jsx",
  output: {
    path: "./",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\jsx?/,
        loader: "babel-loader"
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
     new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery"
    })
 ]
}
