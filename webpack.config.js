var rules = require('./.webpack/rules.js'),
    plugins = require('./.webpack/plugins.js');

module.exports = {
	mode: 'none',
	module: {
		rules: rules
	},
	plugins: plugins
}
