var copy = require('recursive-copy')

var nm = 'node_modules'
var from = `${nm}/@yababay67/svelte-meets-pug`
var to = 'src/pug_modules'
var options = {
    filter: [
        '**/*',
        '!index.js',
        '!LICENSE',
        '!package.json',
        '!README.md',
    ]
}

module.exports = () => copy(from, to, options, function(error, results) {
	if (error) {
		console.error('Copy failed: ' + error);
	} else {
		console.info('Copied ' + results.length + ' files');
	}
});
