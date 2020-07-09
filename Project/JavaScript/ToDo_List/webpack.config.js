const path = require('path');

module.exports = {
  watch: true,
  watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
  },
  resolve: {
      extensions: ['.js']
  },
  optimization: {
    minimize: false
  },
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
};