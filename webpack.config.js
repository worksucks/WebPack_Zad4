const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const OptimizeJsPlugin = require('optimize-js-plugin');

//webpack.config.js
module.exports = (env) => {

    if (env === 'production') {
      plugins.push(
        new.OptimizeJSPlugin({
          sourceMap: false
        })
      )
    }

    const environment = env || 'production';

    return {
      mode: environment,
      entry: './src/index.js',
      output: {
          path: path.resolve(__dirname, 'build'),
          filename: 'app.bundle.js'
      },
      module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: "babel-loader"
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            }
        ]
      },

      plugins:plugins
      [
        new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        inject: 'body'
      })
      new OptimizeJSPlugin({
        sourceMap: false
      })
    ]

    }
};
