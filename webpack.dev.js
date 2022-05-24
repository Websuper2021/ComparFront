const path = require("path");
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
               "./src/vendors/owl-carousel/assets/owl.carousel.css",
               "./src/vendors/owl-carousel/assets/owl.theme.default.min.css",
               "./src/css/style.scss",
               "./src/vendors/jquery/jquery-3.6.0.min.js",
               "./src/vendors/owl-carousel/owl.carousel.min.js",
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
      plugins: [
         new HtmlWebpackPlugin({
            filename: "index.html",
            template: "src/pages/index.html",
            chunks: ["index", "shared"],
            inject: "body",
            minify: false,
         }),
      ],
   };
};
