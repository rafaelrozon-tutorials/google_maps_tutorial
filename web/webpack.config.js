const path = require("path");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: ["./src/app.js"],
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "public/dist")
  },
  devtool: "source-map",
  plugins: [
    new BrowserSyncPlugin({
      files: ["src/**/*.js"],
      server: {
        baseDir: ["./public"]
      },
      port: 3000,
      host: "localhost",
      open: false
    }),
    new MiniCssExtractPlugin({
      filename: "app.css",
      chunkFilename: "[id].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      }
    ]
  },
  target: "web",
  mode: "development"
};
