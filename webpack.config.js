const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = (env) => {
   const devMode = env.MODE === "development";
   return {
      entry: {
          index: {
              import: "./src/index.js",
            //   dependOn: 'shared'
         },
         // shared: [
         //     './src/vendors/jquery/jquery-3.6.0.min.js',
         //     './src/vendors/owl-carousel/owl.carousel.min.js',
         //    ]
      },
      output: {
         path: path.resolve(__dirname, "dist"),
         filename: "[name]/[name].js",
        //  publicPath: "/static/",
         clean: true
      },
      module: {
         rules: [
            {
               test: /\.js$/i,
               exclude: /(node_modules|bower_components)/,
               use: {
                  loader: "babel-loader",
                  options: {
                     presets: ["@babel/preset-env"],
                  },
               },
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,  "css-loader"],
              },
         ],
      },
      mode: env.MODE,
      devtool: devMode && "source-map",
      devServer: {
         port: 9000,
         hot: true,
         https: true,
         watchFiles: "./src",
      },
      optimization: {
         splitChunks: {
            chunks: 'all',
         },
         minimizer: [
            // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
            // `...`,
            new CssMinimizerPlugin(),
          ],
      },
      plugins: [
         new MiniCssExtractPlugin(),
      ],
   };
};
