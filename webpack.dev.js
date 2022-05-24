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
            faq: {
               import: "./src/faq.js",
               dependOn: ["shared"],
            },
            shared: [
               "./src/css/style.scss",
               "./src/vendors/bootstrap.css",
               "./src/vendors/owl-carousel/assets/owl.carousel.css",
               "./src/vendors/owl-carousel/assets/owl.theme.default.min.css",
               "./src/vendors/pe-icon-7-stroke.css",
               "./src/vendors/icofont.css",
               "./src/vendors/helper.css",
               "./src/js/app.js",
               "./src/js/navbar.js",
               "./src/js/scroll-to-top.js",
               "./src/js/toggle.js",
               "./src/vendors/jquery/jquery-3.6.0.min.js",
               "./src/vendors/bootstrap.bundle.js",
               "./src/vendors/owl-carousel/owl.carousel.min.js",
               "./src/vendors/particles.js",
               "./src/vendors/app.js",
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
         new HtmlWebpackPlugin({
            filename: "faq.html",
            template: "src/pages/faq.html",
            chunks: ["faq", "shared"],
            inject: "body",
            minify: false,
         }),
      ],
   };
};
