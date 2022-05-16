const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')



module.exports = (env) => {
   const devMode = env.MODE === "development";
   return {
      // entry: {
      //    index: {
      //       import: "./src/index.js",
      //       dependOn: ["shared"],
      //    },
      //    blog: {
      //       import: "./src/blog.js",
      //       dependOn: ["shared"],
      //    },
      //    shared: [
      //       "./src/vendors/bootstrap.css",
      //       "./src/css/style.css",
      //       "./src/vendors/owl-carousel/assets/owl.carousel.css",
      //       "./src/vendors/jquery/jquery-3.6.0.min.js",
      //       "./src/vendors/owl-carousel/owl.carousel.min.js",
      //    ],
      // },
      // output: {
      //    path: path.resolve(__dirname, "dist"),
      //    filename: "[name]/js/[name].bundle.js",
      //    clean: true,
      // },
      module: {
         rules: [
            // {
            //    test: /\.js$/i,
            //    exclude: /(node_modules|bower_components)/,
            //    use: {
            //       loader: "babel-loader",
            //       options: {
            //          presets: ["@babel/preset-env"],
            //       },
            //    },
            // },
            // {
            //    test: /\.s[ac]ss$/,
            //    use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
            // },
            // {
            //    test: /\.css$/i,
            //    use: [MiniCssExtractPlugin.loader, "css-loader"],
            // },
            // {
            //    test: /\.(png|svg|jpg|jpeg|gif)$/i,
            //    type: "asset",
            //    generator: {
            //       filename: "images/[name][ext]",
            //    },
            // },
         ],
      },
      // mode: env.MODE,
      // devtool: devMode && "source-map",
      // devServer: {
      //    port: 9000,
      //    hot: true,
      //    watchFiles: "./src",
      // },
      // optimization: {
      //    splitChunks: {
      //       chunks: 'all'
      //    },
      //    minimizer: [
      //       `...`,
      //       new CssMinimizerPlugin(),
      //       new ImageMinimizerPlugin({
      //          minimizer: {
      //            implementation: ImageMinimizerPlugin.imageminMinify,
      //            options: {
      //              plugins: [
      //                "imagemin-gifsicle",
      //                "imagemin-mozjpeg",
      //                "imagemin-pngquant",
      //                "imagemin-svgo",
      //              ],
      //            },
      //          },
      //          // Disable `loader`
      //          loader: false,
      //        }),
      //    ],
      // },
      // plugins: [
      //    new MiniCssExtractPlugin({
      //       filename: "[name]/css/[name].css",
      //       chunkFilename: "chunk/css/[name].chunk.css",
      //       ignoreOrder: false,
      //    }),
      //    new HtmlWebpackPlugin({  // Also generate a test.html
      //       filename: 'index.html',
      //       template: 'src/pages/index.html',
      //       chunks: ['index', 'shared'],
      //       inject: 'body',
      //       minify: false
      //     })
      // ],
   };
};
