import { Configuration as WebpackConfiguration, } from 'webpack';
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server'
import paths from './paths';

interface Configuration extends WebpackConfiguration {
    devServer?: WebpackDevServerConfiguration
}

const devConfig: Configuration = {
    watchOptions: {
        aggregateTimeout: 600,
        ignored: /node_modules/,
        poll: 1000,
    },
    // https://webpack.js.org/configuration/dev-server/
    devServer: {
        allowedHosts: 'auto',
        historyApiFallback: true,
        static: {
            directory: paths.src,
            publicPath: paths.build,
        },
        compress: true,
        open: true,
        port: 3001,
        liveReload: true,
        // https: true,
        client: {
            overlay: {
                errors: true,
                warnings: false,
            },
            progress: true,
        },
        watchFiles: [
            './src/**/**.ts',
            './src/**/**.tsx',
            './src/**/**.scss',
            './src/**/**.css',
            './src/**/**.html',
            './src/**/**.json',
            './src/**/**.svg',
            './src/**/**.jpg',
            './src/**/**.jpeg',
        ],
    },
}

const devConfigResult: Configuration = merge(baseConfig, devConfig)

export default devConfigResult;