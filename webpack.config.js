const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ScriptExtPlugin = require('script-ext-html-webpack-plugin');
const { AngularCompilerPlugin } = require('@ngtools/webpack');

module.exports = {
  entry: './src/main.ts',
  output: {
    path: `${__dirname}/dist`,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
    {
        test: /\.(png|jpg)$/,
        use: ['file-loader']
    },
    {
      test: /\.ts$/,
      use: ['@ngtools/webpack']
    }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/src/index.html`,
      output: `${__dirname}/dist`,
      inject: 'head',
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    }),
    new AngularCompilerPlugin({
       tsConfigPath: './tsconfig.json',
       entryModule: './src/assets/components/app.module#AppModule',
       sourceMap: true
    })
  ],
  devServer: {
    contentBase: "./dist"
  }
};