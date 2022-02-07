
let HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const configureAPI=require('./server/configureAPI');



require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-proposal-class-properties"]
});


module.exports = {
    mode:'development',
    //mode:'production',
    devtool: 'inline-source-map',
    entry: [
      './src/js/app.js',
    ],
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
    })],
    devServer: {
      port:5000,
      contentBase:path.join(__dirname,"dist"),
      publicPath: `/`,
      before: function(app, server, compiler) {
        configureAPI(app);
      },
      after:function(app,server,compiler){
        app.get('*', function(req, res) {
          res.redirect("/");
        });
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