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
        rules: [
            {
				test: /\.js$/,
				use: ["babel-loader"],
				exclude:/node_modules/
			},
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    use: ["css-loader", "sass-loader"],
                    fallback: "style-loader"
                })
            }
        ]
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