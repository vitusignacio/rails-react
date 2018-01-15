var path = require('path');
var webpack = require('webpack');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var assetsPath = __dirname + '/../assets/javascripts/react';

var pathsToClean = [
  'dist',
  'build'
]

var cleanOptions = {
  root: assetsPath,
  exclude: [],
  verbose: true,
  dry: false
}

module.exports = {
    entry: 
    {
      home: './components/home/home.jsx'
    },
    output: {
        path: assetsPath,
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
              test: /\.css$/,
              loader: [ 'style-loader', 'css-loader' ] 
            },
            {
              test: /\.scss$/,
              use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use: [
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      sourceMap: true,
                      importLoaders: 2,
                      localIdentName: '[name]__[local]'
                    }
                  },
                  'sass-loader'
                ]
              }) 
            }
        ]
    },
    plugins: [
      new ExtractTextPlugin({ filename: '[name].css', allChunks: true }),
      new CleanWebpackPlugin(pathsToClean, cleanOptions)
      // new webpack.optimize.UglifyJsPlugin({minimize: true})
    ],
    resolve: {
      extensions: ['.js', '.jsx'],
    },
    stats: {
        colors: true
    }
};