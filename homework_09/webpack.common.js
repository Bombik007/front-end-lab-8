const ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    webpack = require("webpack");

module.exports = {
    entry: './src/app.js',
    output:  {
        filename: "app.bundle.js",
        path: __dirname + "/bin"
    },
    
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: __dirname + 'src',
                loader: 'babel-loader',
                query: {
                presets: ["es2015"]
                }
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                    loader: "css-loader", options: {
                        sourceMap: true
                    }
                    }, {
                    loader: "sass-loader", options: {
                        sourceMap: true
                    }
                    }]
                })
            }
        ]
    },

    resolve: {
        extensions: [".js"]
    },

    plugins: [
        new ExtractTextPlugin("style.css"),
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/app.html'
		}),
        new CleanWebpackPlugin(["bin"]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};