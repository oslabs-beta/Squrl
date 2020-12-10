/*https://medium.com/better-programming/start-a-new-electron-app-with-react-and-typescript-cdd6d9997933 */

const path = require('path');
const webpack = require('webpack')
module.exports = {
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devtool: 'source-map',
  entry: './electron/main.ts',
  target: 'electron-main',
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      
    ],
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new webpack.IgnorePlugin(/^pg-native$/)
  ],
};