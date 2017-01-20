'use strict';

var matchOperatorsRe = /[|\\{}()[\]^$+*?.]/g;

var whitespace = /[\t\r\n\v]/
var tb = /\t/g;
var vt = /\v/g;
var nl = /\n/g;
var cr = /\r/g;

module.exports = function (str) {
	if (!str.toString) return str;
	var idx;
	str = str.toString().replace(matchOperatorsRe, '\\$&');
	if(str.search(whitespace) > -1){
		str = str.replace(tb,'\\t');
		str = str.replace(vt,'\\v');
		str = str.replace(nl,'\\n');
		str = str.replace(cr,'\\r');
	}
	return str;
};
