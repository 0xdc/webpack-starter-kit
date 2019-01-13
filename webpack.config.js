var rules = require('./.webpack/rules.js'),
    entry = require('./.webpack/entry.js'),
    plugins = require('./.webpack/plugins.js');

module.exports = {
	mode: 'none',
	entry: entry,
	module: {
		rules: rules
	},
	plugins: plugins
}
