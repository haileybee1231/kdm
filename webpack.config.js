var path = require('path');
var SRC_DIR = path.join(__dirname, '/react-client/src');
var DIST_DIR = path.join(__dirname, '/react-client/dist');
// const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
	entry: `${SRC_DIR}/index.jsx`,
	output: {
		filename: 'bundle.js',
		path: DIST_DIR,
		publicPath: '/'
	},
	node: {
		fs: "empty"
	},
	// plugins: [
	// 	new CompressionPlugin({
	// 		asset: `[path].gz[query]`,
	// 		algorithm: `gzip`,
	// 		test: /\.js$|\.css$|\.html$/,
	// 		threshold: 10240,
	// 		minRatio: 0.8,
	// 	}),
	// ],
	resolve: { extensions: ['.js', '.jsx', '*'] },
	module: {
		rules: [
			{
				test: /\.jsx?/,
				include: SRC_DIR,
				loader: 'babel-loader',
				options: {
					presets: ['react', 'env'],
					plugins: ['transform-class-properties']
				},
			},
			{
				test: /\.(?:png|jpg|svg)$/,
				loader: 'file-loader',
				query: {
					// Inline images smaller than 10kb as data URIs
					limit: 10000,
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},
	devServer: {
		historyApiFallback: true  // serves up main page for react-router to work with redux
	}
};
