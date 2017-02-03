const child_process = require('child_process');


class Spider{


	request(path){

		var promise =  new Promise((resolve, reject) => {

			const phantom = child_process.spawn('phantomjs', ['../../Spider/index.js', path]);

			phantom.stdout.setEncoding('utf8');

	
			phantom.stdout.on('data', function(data){
				console.log(data)
   				resolve(data);
			});

			phantom.on('exit', function(code){
				reject({});
			});

	});

		return promise;
	
   }



	

}


module.exports = new Spider();