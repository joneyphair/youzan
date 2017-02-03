
var md5 = require('md5');



var md5Func = function(msg){
	return md5(msg);
}


module.exports = md5Func;