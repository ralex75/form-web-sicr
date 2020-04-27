
//const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
const configureAPI=require('./server/configureAPI');


require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-class-properties"]
});


module.exports = {
    mode:'development',
    devtool: 'inline-source-map',
    entry: [
      './src/js/app.js',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
      port:3000,
      contentBase:path.join(__dirname,"dist"),
      before: function(app, server, compiler) {
        configureAPI(app);
      }
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
            }
            
          ]
        }
    
  };