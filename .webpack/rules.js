module.exports = [
	{
		test: /\.css$/,
		use: [
			'style-loader',
			'css-loader'
		]
	},
	{
		test: /\.js$/,
		use: [ 'babel-loader' ],
		exclude: /node_modules/
	}
]
