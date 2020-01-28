const path = require('path');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const webPage = require('./webpack_helpers/web-page.js');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin({ cleanOnceBeforeBuildPatterns: ['**/*', '!.git'] }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
      chunkFilename: '[name].css'
    }),
    new CopyWebpackPlugin([{ from: './src/images', to: 'images' }]),
    webPage({ filename: 'index.html', chunks: ['main'] }),
    webPage({ filename: 'about.html', chunks: ['main'] }),
    webPage({ filename: 'portfolio.html', chunks: ['main'] }),
    webPage({ filename: 'contact.html', chunks: ['main'] }),
    new FaviconsWebpackPlugin('./src/images/logo.png'),
    new ResourceHintWebpackPlugin(),
    new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    })
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/i,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.hbs/,
        loader: 'handlebars-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(pdf|png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          name: '[path][name].[ext]'
        }
      }
    ]
  }
};
