import ExtractTextPlugin from "extract-text-webpack-plugin";
import CleanWebpackPlugin from "clean-webpack-plugin";
import webpack from "webpack";

module.exports = {
    entry: './src/app.js',
    output:  {
        filename: "app.bundle.js",
        path: __dirname + "/bin"
    },
    mode: "development",
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
        new HtmlWebpackPlugin({
			filename: 'index.html',
			template: './src/app.html'
		}),
        new ExtractTextPlugin("style.css"),
        new CleanWebpackPlugin(["bin"]),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
};