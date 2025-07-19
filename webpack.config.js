const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const isProduction = process.env.NODE_ENV === "production";
module.exports = {
  entry: "./src/index.js", // Entry point of your application
  output: {
    filename: "bundle.js", // Output bundle file name
    path: isProduction ? path.resolve(__dirname, "build") : path.resolve(__dirname, "public"), // Output directory changed from 'dist' to 'public'
    clean: true, // Clean the output directory before emit
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.svg$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[hash].[ext]',
              outputPath: 'assets',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "public", "index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
      publicPath: '/',
    },
    historyApiFallback: true,
    port: 3000, // Port for the development server
    open: true, // Open the default web browser when the server starts
  },
};