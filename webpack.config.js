const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.tsx',
  mode: 'development',
  devtool: 'source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.tsx|\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
