/*
*
*
*
*/


var {YouZan} = require('../Utils');


class TradeController {

	constructor(){

	}

	index(req,res){

	}

	items(req,res){

	}

	sold(req,res){


			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.trades.sold.get',
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}


}



module.exports = new TradeController();
