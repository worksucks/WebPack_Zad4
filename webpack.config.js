const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//webpack.config.js
module.exports = (env) => {

    plugins:[new HtmlWebpackPlugin({
      temmplate: 'src/index.html',
      filename: 'index.html',
      inject: 'body'
    })]

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
      }
    }
};