const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin'); // 修改为 html-webpack-plugin  
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 添加 mini-css-extract-plugin  
  
module.exports = {  
  mode:'development',
  output: {  
    publicPath: '/',  
    filename: '[name].js',  
  },  
  resolve: {  
    modules: ['node_modules'],  
    mainFields: ['module', 'jsnext:main', 'browser', 'main'], // 修改 mainFields 的顺序  
  },  
  module: {  
    rules: [  
      {  
        test: /\.scss$/,  
        use: [  
          MiniCssExtractPlugin.loader, // 替换为 mini-css-extract-plugin
          "style-loader",  
          'css-loader',
          'sass-loader'  
        ],  
        include: path.resolve(__dirname, 'src')  
      },  
      {  
        test: /\.css$/,  
        use: [MiniCssExtractPlugin.loader, 'css-loader'], // 替换为 mini-css-extract-plugin  
      },  
      {  
        test: /\.(gif|png|jpe?g|eot|woff|ttf|svg|pdf)$/,  
        // 你可以考虑使用 url-loader  
        use: [  
          {  
            loader: 'url-loader',  
            options: {  
              limit: 8192, // 小于8kb的图片转为base64  
            },  
          },  
        ],  
      },  
    ]  
  },  
  entry: {  
    main: './src/main.js',  
  },  
  plugins: [  
    new HtmlWebpackPlugin({ // 修改为 HtmlWebpackPlugin  
      template: './src/index.html',  
      filename: 'index.html',  
    }),  
    new MiniCssExtractPlugin({  
      filename: '[name].css',  
    }),  
  ],  
  devtool: 'source-map',  
};