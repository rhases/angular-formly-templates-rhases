const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const path = require('path');

module.exports = {
  entry: './src/index.ts',
  devtool: 'source-map',
  output: {
    path: __dirname + '/../dist',
    filename: 'index.js',
    library: 'angular-formly-templates-rhases',
    libraryTarget: 'commonjs2'
  },
  externals: {
    'angular': 'angular',
    'angular-formly': 'angular-formly',
    'lodash': 'lodash',
    'angular-formly-templates-bootstrap': 'angular-formly-templates-bootstrap',
    'angular-ui-bootstrap': 'angular-ui-bootstrap',
    'api-check': {
      root: 'apiCheck',
      amd: 'api-check',
      commonjs2: 'api-check',
      commonjs: 'api-check'
    }
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          'ng-annotate-loader',
          'awesome-typescript-loader?declaration=true'
          ],
      },
      {
        test: /\.html$/, use: ['raw-loader']
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
