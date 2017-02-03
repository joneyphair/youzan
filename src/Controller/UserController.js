/*
*
*
*
*/


var {YouZan} = require('../Utils');


class UserController {

	constructor(){

	}


	fans(req,res){

			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.users.weixin.followers.pull',
				after_fans_id:'0'
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}

	fansBasic(req,res){
		
		res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.users.weixin.followers.pull',
				after_fans_id:'0'
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}


	index(req,res){

	}

}



module.exports = new UserController();
