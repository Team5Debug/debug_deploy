const DotEnv = require('dotenv-webpack');

const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
DotEnv.config();
module.exports = {
//   entry: path.resolve(__dirname, 'src/index.jsx'),
//   output: {
//     path: path.resolve(__dirname, 'dist/'),
//     filename: 'bundle.js',
//   },
//   resolve: {
//     extensions: ['.js', '.jsx'],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         use: 'babel-loader',
//       },
//     ],
//   },
//   mode: 'development',
//   devServer: {
//     port: 7777,
//     contentBase: path.join(__dirname, 'public/'),
//     historyApiFallback: true,
//   },
  plugins: [
    new DotEnv(),
    new webpack.DefinePlugin({
            'process.env.REACT_APP_CLIENT_KEY':JSON.stringify(process.env.REACT_APP_CLIENT),
            'process.env.REACT_APP_API_KEY':JSON.stringify(process.env.REACT_APP_API_KEY),
            'process.env.REACT_APP_GITHUB_IP':JSON.stringify(process.env.REACT_APP_GITHUB_IP),
            'process.env.REACT_APP_PORT':JSON.stringify(process.env.REACT_APP_PORT),
            'process.env.REACT_APP_PAY_API_KEY':JSON.stringify(process.env.REACT_APP_PAY_API_KEY),
            'process.env.REACT_APP_PAY_API_SECRET_KEY':JSON.stringify(process.env.REACT_APP_PAY_API_SECRET_KEY),
    }),
    
//     new webpack.HotModuleReplacementPlugin(),
//     new HtmlWebpackPlugin({
//       template: path.resolve(__dirname, 'public/index.html'),
//     }),
//     new CleanWebpackPlugin(),
  ],
};