var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + "/src/index.js",
    output: {
        path: __dirname + "/build",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.json$/,
            loader: "json"
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel'
        }, {
            test: /\.css$/,
            loader: "style!css?module!postcss"
        }]
    },
    postcss: [
        require('autoprefixer')
    ],
    plugins: [
        new webpack.BannerPlugin("Copyright @ Dmitry"),
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html"
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devtool: 'eval-source-map',
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true,
        hot: true
    }
}