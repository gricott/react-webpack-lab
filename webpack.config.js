module.exports = {
  entry: {
    bundle: './src/main.js'
  },
  output: {
    filename: './dist/[name].js'
  },
  devtool: 'cheap-module-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/, // ←Test for ".js" file, if it passes, use the loader
        exclude: /node_modules/,
        loader: 'babel' // ←use babel (short for ‘babel-loader’) loads collection of ES6 transforms and JSX for react from babelrc file
      }
    ]
  }
};
