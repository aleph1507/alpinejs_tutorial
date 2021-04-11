const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
require('v8-compile-cache');

module.exports = {
    entry: './src/index.js',
    watch: false,
    watchOptions: {
        ignored: /node_modules/,
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/img',
                    to: 'img',
                },
                {
                    from: 'src/index.html',
                    to: ''
                }
            ],
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        watchContentBase: true,
        port: 9000,
        open: true
    }
}