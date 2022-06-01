const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('../package.json');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const WebpackBar = require('webpackbar');

module.exports = {
  mode: 'production',
  stats: 'errors-only',
  externals: {
    vue: {
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue',
      root: 'Vue'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'babel-loader',
          }
        ],
      },
      {
        test: /\.sass$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass'),
              sassOptions: {
                indentedSyntax: true,
                outputStyle: 'expanded'
              },
            },
          }
        ]
      }
    ],
  },
  plugins: [
    new WebpackBar(),
    new webpack.BannerPlugin({
      banner: `/*!
  * DeepVue v${pkg.version}
  * Made by Pedro Borges
  * Released under the MIT License.
  * © 2022, azanbertre.
  */`,
      raw: true,
      entryOnly: true
    })
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.sass' ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new UglifyJsPlugin({
        include: /(min|index)\.js$/,
      }),
      new OptimizeCSSAssetsPlugin({
        assetNameRegExp: /(min|style)\.css$/g,
        cssProcessor: require('cssnano'),
      })
    ]
  }
}
