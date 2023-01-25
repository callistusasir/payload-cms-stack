import { Configuration, DefinePlugin } from "webpack";
import HtmlWebpackPlugin from 'html-webpack-plugin';

import path from 'path';
import paths from "./paths";

const dotenv = require('dotenv').config( {
  path: path.join(__dirname, '../.env')
} );

const baseConfig: Configuration = {
    entry: path.join(paths.src, 'index.tsx'),
    mode: 'development',
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    output: {
        path: paths.build,
        filename: '[contenthash].main.js',
        publicPath: '/',
        clean: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'New Zaizi App',
            favicon: path.join(paths.public, 'favicon.ico'),
            template: path.join(paths.public, 'index.html'),
            manifest: path.join(paths.public, 'manifest.json'),
            hash: true,
            filename: './index.html',
        }),
        new DefinePlugin({
          "process.env": dotenv.parsed
        })
    ],
    module: {
        rules: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ["babel-loader"],
          },
          {
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: [{
              loader: "ts-loader",
              options: {
                configFile: "tsconfig.webpack.json"
              }
            }],
          },
          {
            test: /\.(css|scss)$/,
            use: ["style-loader", "css-loader"],
          },
          {
            test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
            exclude: /node_modules/,
            use: ['file-loader?name=[name].[ext]']
          },
        ]
    },
}

export default baseConfig;