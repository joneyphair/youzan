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

	

			//res.redirect(url);

			//res.json(params);

	    res.render('index');
	}

}



module.exports = new HomeController();
