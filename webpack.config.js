var path = require('path');

module.exports = {
	entry: {
		'main': ['./js/jquery-1.11.1.js', './js/common.js', './js/data.js', './js/mui.picker.js', './js/vue2.0.js', './js/test.js']
	},
	output: {
		filename: 'js/main.js',
		path: path.resolve(__dirname, 'dist')
	}
}
