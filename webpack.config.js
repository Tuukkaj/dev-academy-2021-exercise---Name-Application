const path = require("path");

module.exports = {
  entry: { 
    app: path.resolve(__dirname, "source", "app.jsx") 
  },
  output: {
    path: path.resolve(__dirname, "public/js"),
    filename: '[name].bundle.js'
   },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
};