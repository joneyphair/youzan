

var dateformat = require('dateformat');



var dateformatFunc = function(value,format){
		return dateformat(value,format);
}


module.exports = dateformatFunc;