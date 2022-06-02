const path = require('path');
const Components = require('./components.json');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('../webpack.base.js');
const merge = require('webpack-merge');

// * Delete new placeholder
delete Components['new'];

module.exports = merge(baseWebpackConfig, {
    entry: Components,
    output: {
      filename: '[name]/index.js',
      path: path.resolve(process.cwd(), 'dist'),
      publicPath: '/dist/',
      library: '[name]',
      libraryTarget: 'umd',
      libraryExport: 'default',
      globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
    plugins:[
      new MiniCssExtractPlugin({
        filename: '[name]/style.css',
      })
    ]
})
