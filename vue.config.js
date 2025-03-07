const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
	publicPath: process.env.NODE_ENV === 'production'
		? '/frog-admin/'
		: '/',
	chainWebpack: (config) => {
		config.resolve.alias
			.set('@', resolve('src'))
	},

	devServer: {
		port: 9999,
	},
	runtimeCompiler: true
};
