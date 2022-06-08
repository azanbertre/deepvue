const path = require('path');
const baseWebpackConfig = require('../webpack.base.js');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(baseWebpackConfig, {
  entry: {
    'deepvue': './src/index.ts',
    'deepvue.min': './src/index.ts',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/dist/',
    library: {
      name: 'DeepVue',
      type: 'umd',
      export: 'default',
      umdNamedDefine: true
    },
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  plugins:[
    new MiniCssExtractPlugin({
      filename: '[name].css',
    })
  ]
})
