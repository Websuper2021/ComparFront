const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env) => {
   return {
      entry: {
            index: {
               import: "./src/index.js",
               dependOn: ["shared"],
            },
            blog: {
               import: "./src/blog.js",
               dependOn: ["shared"],
            },
            shared: [
               "./src/vendors/bootstrap.css",
               "./src/css/style.css",
               "./src/vendors/owl-carousel/assets/owl.carousel.css",
               "./src/vendors/jquery/jquery-3.6.0.min.js",
               "./src/vendors/owl-carousel/owl.carousel.min.js",
               "./src/vendors/owl-carousel/assets/owl.theme.default.min.css",
            ],
         },
         output: {
            path: path.resolve(__dirname, "dist"),
            filename: "[name]/js/[name].bundle.js",
            clean: true,
         },
      module: {
         rules: [
            {
               test: /\.s[ac]ss$/,
               use: ["style-loader", "css-loader", "sass-loader"],
            },
            {
               test: /\.css$/i,
               use: ["style-loader", "css-loader"],
            },
            {
               test: /\.(png|svg|jpg|jpeg|gif)$/i,
               type: "asset",
               generator: {
                  filename: "images/[name][ext]",
               },
            },
            {
               test: /\.html$/i,
               loader: "html-loader",
            },
         ],
      },
      mode: "development",
      devtool: "source-map",
      devServer: {
         port: 9000,
         hot: true,
         static: "./dist",
         watchFiles: "./src",
      },
      optimization: {
         splitChunks: {
            chunks: "all",
         },
      },
      plugins: [
         new HtmlWebpackPlugin({
            // Also generate a test.html
            filename: "index.html",
            template: "src/pages/index.html",
            chunks: ["index", "shared"],
            inject: "body",
            minify: false,
         }),
      ],
   };
};
