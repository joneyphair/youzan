const child_process = require('child_process');


class Spider{


	request(path){


		var promise =  new Promise((resolve, reject) => {

			const phantom = child_process.spawn('phantomjs', ['./src/Spider/index.js', 'https://koudaitong.com/v2/dashboard/index']);

			phantom.stdout.setEncoding('utf8');

	
			phantom.stdout.on('data', function(data){
				console.log('4435454543534',data)
   				resolve(data);
			});

			phantom.on('exit', function(code){
				console.log('--------')
				reject({'err':1});
			});

	   });

		return promise;
	
   }



	

}


module.exports = new Spider();