/*
*
*
*
*/


var {YouZan} = require('../Utils');


class UserController {

	constructor(){

	}




	index(req,res){

	}

	items(req,res){

	}

	onsale(req,res){

		 	res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.items.onsale.get',
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.send(err);
			});
	}

	inventory(req,res){

			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.items.inventory.get',
				order_by:'created',
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.send(err);
			});
	}

}



module.exports = new UserController();
