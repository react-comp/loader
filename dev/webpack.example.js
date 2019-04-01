const path = require('path');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const devConfig = require('./webpack.development');

module.exports = (env) => {
  const base = devConfig(env);
  delete base.entry;
  delete base.externals;
  const config = webpackMerge(
    base, {
      mode: 'development',
      context: path.resolve(__dirname, '../example/'),
      entry: {
        index: './scripts/index',
      },
      output: {
        path: path.resolve(__dirname, '../example-dist/'),
        filename: 'example.js',
      },
      module: {
        rules: [
          {
            test: /\.(png|jpg|jpeg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  outputPath: './images/',
                  limit: 500,
                },
              },
            ],
          },
        ],
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, '../example/index.html'),
        }),
      ],
    },
  );
  return config;
};
