const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');
const pkg = require('../package.json');
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
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
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          loaders: {
            ts: "babel-loader"
          }
        },
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
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
    }),
    new VueLoaderPlugin(),
  ],
  resolve: {
    extensions: [ '.tsx', '.ts', '.js', '.sass' ],
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        include: /(min|index)\.js$/,
      }),
      new CssMinimizerPlugin({
        include: /(min|style)\.css$/g,
      })
    ]
  }
}
