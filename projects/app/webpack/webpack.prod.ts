import { Configuration } from 'webpack';
import TerserPlugin from 'terser-webpack-plugin'
import { merge } from 'webpack-merge';
import baseConfig from './webpack.base';

const devConfig: Configuration = {
    mode: 'production',
    optimization: {
        chunkIds: 'size',
        emitOnErrors: true,
        innerGraph: true,
        mergeDuplicateChunks: true, 
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
}

const prodConfigResult: Configuration = merge(baseConfig, devConfig)

export default prodConfigResult;