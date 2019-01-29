const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      output: `${__dirname}/dist`,
      inject: 'head',
    }),
  ],
  devServer: {
    contentBase: "./dist"
  }
};