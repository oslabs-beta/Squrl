const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    resolve : {
        extensions: ['.tsx', '.ts', '.js'],
        mainFields: ['main', 'module', 'browser'],
    },
    entry : './src/app.tsx',
    target : 'electron-renderer',
    devtool : 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devServer: {
        contentBase : path.join(__dirname, '../dist/renderer'),
        historyApiFallback: true,
        compress: true,
        hot: true,
        port : 3000,
        publicPath: '/',
    },
    output: {
        path: path.resolve(__dirname, '../dist/renderer'),
        filename: 'js/[name].js',
        publicPath: './'
    },
    plugins: [
        new HtmlWebpackPlugin(),
    ]
}