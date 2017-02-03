/*
*
*获取所有未结束的优惠列表（包含未开始的、进行中的）
*
*/


var {YouZan,dateformat,md5,Spider} = require('../Utils');



class SpiderController {

	constructor(){

	}


	index(req,res){



		Spider.request('main').then(function(response){
				res.json(response);
		}).catch(function(err){
				res.json(err);
		});

		

	}

}



module.exports = new SpiderController();
