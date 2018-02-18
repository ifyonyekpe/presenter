const path = require('path')
const { AureliaPlugin } = require('aurelia-webpack-plugin')
const {
  TsConfigPathsPlugin,
  CheckerPlugin,
} = require('awesome-typescript-loader')

const outDir = path.resolve(__dirname, 'dist')
const srcDir = path.resolve(__dirname, 'src')
const nodeModulesDir = path.resolve(__dirname, 'node_modules')

const cssRules = [{ loader: 'css-loader' }]

module.exports = {
  entry: 'aurelia-bootstrapper',

  output: {
    path: outDir,
    publicPath: '/dist/',
    filename: 'app.bundle.js',
    chunkFilename: 'app.chunk.js',
  },

  resolve: {
    extensions: ['.ts', '.js'],
    modules: ['src', 'node_modules'].map(x => path.resolve(x)),
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        issuer: [{ not: [{ test: /\.html$/i }] }],
        use: ['style-loader', ...cssRules],
      },
      {
        test: /\.css$/i,
        issuer: [{ test: /\.html$/i }],
        use: cssRules,
      },
      { test: /\.html$/i,
        exclude: nodeModulesDir,
        loader: 'html-loader' 
      },
      {
        test: /\.(png|jpg|ttf|eot|svg|woff|woff2)$/,
        exclude: /node_modules/,
        use: 'url-loader?limit=100',
      },
      {
        test: /\.ts$/i,
        loader: 'awesome-typescript-loader',
        exclude: nodeModulesDir,
      },
    ],
  },

  plugins: [
    new AureliaPlugin(),
    new TsConfigPathsPlugin(),
    new CheckerPlugin(),
  ],
}
