/*
*
*
*
*/


var {YouZan,dateformat,md5} = require('../Utils');

class SalesManController {

	constructor(){

	}


	apply(req,res){



		var useragent = req.useragent.source;

			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.salesman.account.add',
				outer_type:useragent,	
				outer_user_id:'2559714430',
			}
			console.log('p',params)

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}

	remove(req,res){
		res.send({})
	}


	index(req,res){

	}

}



module.exports = new SalesManController();
