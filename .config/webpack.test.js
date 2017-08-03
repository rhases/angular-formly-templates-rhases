const webpack = require('webpack');
const path = require('path');

module.exports = {
  output: {},
  resolve: {
    extensions: ['.ts', '.webpack.js', '.web.js', '.js'],
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: path.resolve('lib'),
        use: ['istanbul-instrumenter-loader'],
        exclude: [/\.spec\.ts$/, /node_modules/]
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader?inlineSourceMap=true&sourceMap=false&declaration=false'],
        exclude: [/node_modules/]
      },
      { test: /\.pug$/, use: ['raw-loader'] },
      { test: /\.scss$/, use: ['raw-loader'] }
    ]
  },
  plugins: [],
};
