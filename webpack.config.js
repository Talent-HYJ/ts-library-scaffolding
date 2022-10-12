const FriendlyErrorsWebpackPlugin = require('@soda/friendly-errors-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path')
process.env.PUBLIC_URL = path.resolve(__dirname, '../public')
const env = process.env.NODE_ENV

module.exports = {
  entry: env === 'development' ? './server/index.ts' : './src/index.ts',
  output: {
    path: path.resolve(__dirname, './build'),
    filename: '[name].js',
  },
  stats: 'minimal',
  mode: env === 'development' ? 'development' : 'production',
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    mainFields: ['jsnext:main', 'module', 'browser', 'main'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.less', '.css'],
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            cacheCompression: false,
            sourceMaps: true,
            inputSourceMap: true,
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'usage',
                  corejs: {
                    version: 2,
                  },
                },
              ],
              ['@babel/preset-typescript'],
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new ESLintPlugin({
      fix: true,
      cache: true,
    }),
    new CleanWebpackPlugin({
      dry: false,
      cleanOnceBeforeBuildPatterns: ['./build'],
      dangerouslyAllowCleanPatternsOutsideProject: true,
    }),
   env==='development'&& new HtmlWebpackPlugin({
      template:'./server/template.html'
    }),
    new FriendlyErrorsWebpackPlugin(),
  ].filter(Boolean),
}
