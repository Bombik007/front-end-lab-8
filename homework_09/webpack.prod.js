const merge = require('webpack-merge'),
    common = require('./webpack.common.js'),
    UglifyJSPlugin = require('uglifyjs-webpack-plugin'),
    OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
    BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = merge(common, {
	plugins: [
		new UglifyJSPlugin({
            test: /\.js($|\?)/i
        }),
        new OptimizeCssAssetsPlugin(),
        new BundleAnalyzerPlugin()
	]
});