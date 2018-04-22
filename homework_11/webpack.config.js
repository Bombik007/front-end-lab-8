const ExtractTextPlugin = require("extract-text-webpack-plugin"),
    HtmlWebpackPlugin = require("html-webpack-plugin"),
    CleanWebpackPlugin = require("clean-webpack-plugin"),
    webpack = require("webpack");

module.exports = {
    entry: "./src/js/output-module.js",
    output:  {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },

    watch: true,
    
    module: {
        loaders: [
            {
                test: /\.js?$/,
                include: __dirname + "src",
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader", options: {
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
        new ExtractTextPlugin("styles.css"),
        new HtmlWebpackPlugin({
			filename: "index.html",
			template: "./src/index.html"
		}),
        new CleanWebpackPlugin(["dist"]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};