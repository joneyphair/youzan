/*
*
*
*
*/



var {dateformat,YouZan} = require('../Utils');

const NewsModel = require('../Model/News');

class HomeController {

	constructor(){

	}

	index(req,res){

		 	res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.items.onsale.get',
			}


			//res.redirect(url);

			//res.json(params);

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.send(err);
			});
	    //res.send('====>>>aaagaaHello world!');
	}

}



module.exports = new HomeController();
