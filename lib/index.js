var typogr = require('typogr');
var minimatch = require('minimatch');
var each = require('async').each;

module.exports = function plugin(options) {
	options = options || {}
	options.match = options.match || '**/*.+(html|htm)';
	return function (files, metalsmith, done) {
		each(Object.keys(files).filter(minimatch.filter(options.match)),function(file,cb){
			meta = files[file];
			meta.contents = typogr(meta.contents.toString()).typogrify();
			cb();
		},done);
	};
};