const path = require("path");

const {shared, sharedDynamic, HtmlWebpackPluginList} = require('./webpack.common')

require('dotenv').config()

const distPath = process.env.DIST_PATH || path.resolve(__dirname, "dist")

module.exports = (env) => {
   return {
      entry: {
         shared: shared,
         sharedDynamic: sharedDynamic,
      },
      output: {
         path: distPath,
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
         static: distPath,
         watchFiles: "./src",
      },
      plugins: [...HtmlWebpackPluginList],

     
   };
};