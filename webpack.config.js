var HtmlWebpackPlugin = require("html-webpack-plugin");
var path = require('path');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, "src"),
    watchContentBase: true,
    compress: true,
    port: 9000,
    hot: true,
    host: "0.0.0.0",
    https: true,
  },
};