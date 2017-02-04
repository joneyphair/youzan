/*
*
*获取所有未结束的优惠列表（包含未开始的、进行中的）
*
*/


var {YouZan,dateformat,md5} = require('../Utils');



class CouponsController {

	constructor(){

	}

	unfinished(req,res){


			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.ump.coupons.unfinished.all',
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});


	}


	//give to user
	take(req,res){

		res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.ump.coupon.take ',
				weixin_openid:'oRNSRv2XvOHbO9et8R9WpiRCL4ts',
				coupon_group_id:'1671006'
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}


	logs(req,res){

			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.ump.coupon.consume.verifylogs.get',
				type:'promocard'
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



module.exports = new CouponsController();
