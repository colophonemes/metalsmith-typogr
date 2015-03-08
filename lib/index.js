var typogr = require('typogr');
var minimatch = require('minimatch');
var _ = require('lodash');
//var path = require('path');

module.exports = function plugin() {

  /**
   *
   * @param {Object} files
   * @param {Metalsmith} metalsmith
   * @param {Function} done
   */
	return function (files, metalsmith, done) {
		_.each(files,function(file,key){
			if(minimatch(key,'**/*.+(html|htm)') ){
				files[key].contents = typogr.typogrify(files[key].contents.toString());
			}
		});
		done();
	};
};