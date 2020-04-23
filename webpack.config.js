
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-class-properties"]
});


module.exports = {
    entry: [
      './src/js/app.js',
      //'./src/style.css'
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            /*{
              test: /\.html$/,
              use:[
                {
                   loader: "html-loader",
                   options:{minimize:true}
                }
              ]
           },*/
            {
              // Apply rule for .sass, .scss or .css files
              test: /\.(sa|sc|c)ss$/,
        
              // Set loaders to transform files.
              // Loaders are applying from right to left(!)
              // The first loader will be applied after others
              use: [
                  /*{
                    // After all CSS loaders we use plugin to do his work.
                    // It gets all transformed CSS and extracts it into separate
                    // single bundled file
                    loader: MiniCssExtractPlugin.loader
                  }, */
                     {
                       // This loader resolves url() and @imports inside CSS
                       loader: "css-loader",
                     }
                     
                     
                   ]
            }
          ]
        },
    plugins:[
      /*new MiniCssExtractPlugin({
        filename: "bundle.css"
      }),*/
      /*new HtmlWebPackPlugin({
        template: "./src/index.html",
        filename: "./index_out.html",
        inject:true
      })*/
    ],
    mode:'development'
  };