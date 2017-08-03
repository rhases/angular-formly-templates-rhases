const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const path = require('path');

module.exports = {
  entry: './lib/index.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/../dist',
    filename: 'index.js',
    library: 'angular-formly-templates-rhases',
    libraryTarget: 'commonjs2'
  },
  externals: [
  ],
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader?declaration=true'
          ],
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      { test: /\.pug$/, use: ['raw-loader','pug-html-loader'] },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
  plugins: [
    new ModuleConcatenationPlugin(),
  ]
};
