const path = require('path');
const HtmlWebpackPlugin = require( "html-webpack-plugin");
module.exports={
    entry: {
      index: './src/js/index.js',
      // info: './src/js/info.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.join(__dirname, '/dist')
    },
    devServer:{
      contentBase: path.join(__dirname, '/dist'),
      compress: true,
      port: 9000
    },
    module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
              loader: 'babel-loader',
          },
          {
            test: /\.css$/,
            use: [
              {
                loader:'style-loader'
              },
              {
                loader: 'css-loader'
              }
            ]
          },
          {
            test: /\.scss$/,
            use: [
              {
                loader:'style-loader'
              },
              {
                loader: 'css-loader'
              },
              {
                loader:'sass-loader'
              }
            ]
          }
        ]
      },
      optimization:{
        splitChunks:{
          cacheGroups:{
            commons:{
              test: /[\\/]node_modules[\\/]/,
              name: 'common',
              chunks: 'all'
            }
          }
        }
      },
      plugins:[
        new HtmlWebpackPlugin({
          filename:'index.html',
          template: 'src/index.html',
          title:'Mi Webpack App'
        }),
        new HtmlWebpackPlugin({
          filename:'info.html',
          template: 'src/info.html',
          title:'Webpack Info App'
        })
      ]
}