const path = require("path");
const webpack = require('webpack');
const APP_DIR = path.join(__dirname, "/../../client")


module.exports = {
	entry: {
		app: [
			path.join(APP_DIR, "index.js"),
			'webpack-hot-middleware/client?path=/__webpack_hmr&reload=true',
		],
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				include: APP_DIR,
				use: {
					loader: 'babel-loader',
				}
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	output: {
		path: path.join(__dirname, "/../../public"),
		filename: "bundle.js",
		publicPath: "/",
		hotUpdateChunkFilename: '.hot/hot-update.js',
		hotUpdateMainFilename: '.hot/hot-update.json',
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		hot: true,
		historyApiFallback: true
	}
};
