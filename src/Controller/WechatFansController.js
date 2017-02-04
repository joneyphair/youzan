/*
*
*WechatFansController
*
*/


var {YouZan} = require('../Utils');


class WechatFansController {

	constructor(){

	}

	//wechat fans list
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
	//wechat fans add tags 
	fansAddTags(req,res){

			res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.users.weixin.follower.tags.add',
				weixin_openid:'oRNSRv2XvOHbO9et8R9WpiRCL4ts',
				tags:'new_user'
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}

	//wechat fans detail info
	detail(req,res){
		
		res.setHeader('Content-Type', 'application/json');

			var params = {
				method:'kdt.users.weixin.follower.get',
				user_id:'72018723'
			}

			YouZan.request(params).then(function(response){
				res.json(response);
			}).catch(function(err){
				res.json(err);
			});
	}

	basic(req,res){
		
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



module.exports = new WechatFansController();
