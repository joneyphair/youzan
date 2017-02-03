
var fetch  = require('isomorphic-fetch');
var URLSearchParams = require('url-search-params');

var md5 = require('../md5');
var dateformat = require('../dateformat');
var youzanConfigs = require('../../Configs').youzan;


var env = process.env.NODE_ENV;

function getUrl(params = {},mode = false) {

    let server = youzanConfigs.url;


    params = Object.assign({},params,{
    		sign:'',
    		app_id:youzanConfigs.app_id,
			app_secreat:youzanConfigs.app_secreat,
			format:youzanConfigs.format,
			v:youzanConfigs.v,
			sign_method:youzanConfigs.sign_method,
			timestamp:dateformat(new Date(),'yyyy-mm-dd HH:MM:ss'),
    });


    var keys = Object.keys(params).sort();


   	var tmp = Object.assign({},params);

   	params = {};

   	keys.map(function(item,index){
   		params[item] = tmp[item];
   	});



		

    var sign ='';
		sign+=params.app_secreat;

			for(var item in params){
				 if(params.hasOwnProperty(item) && params[item] && item !== 'app_secreat'){
					 sign += `${item}${params[item]}`;
				 }
			}

			sign+= params.app_secreat;

			params.sign = md5(sign);

			
			for(var item in params){
				 if(params.hasOwnProperty(item) && params[item]  && item !== 'app_secreat'){
					 server += `${item}=${params[item]}&`;
				 }
			}
			
				console.log('====>>>>>>',params);

    return server;
}


function check401(res) {
    if (res.code ===-4011) {
		window.location.href = '/';
    }
    return res;
}

function jsonParse(res) {
    return res.json();
}

const http = {

    request:(params,method='get')=>{

        const url = getUrl(params);


        var promise = '';

        if (!url) {
            return;
        }

        switch(method){
            case 'get':{

                promise = http.get(url);
                break;
            }
            case 'post':{
                    promise = http.post(url,params,payload);
                break;
            }

            case 'put':{
                    promise = http.update(url,params,payload);
                break;
            }
            case 'delete':{
                   promise = http.remove(url,params,payload);
                break;
            }
            default:{
                promise = http.get(url,params,payload);
                break;
            }
        }

        return promise;
    },
	transformPreResponse(response){
		var data = response;
		//处理mock 数据
		if(Object.prototype.toString.call(response) === '[object Array]'){
			data = response.pop();
		}
		return data;
	},
	transformResponse:function(response){
		return response.response;
	},
	get: (url) => new Promise((resolve, reject) => {

		if (!url) {
			return;
		}

		fetch(url, {
			method: 'GET',
			headers: {
				'Accept': '*',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
      mode:'cors',
		  credentials: 'include',
		})
			.then(jsonParse)
			.then(check401)
			.then(http.transformPreResponse)
			.then(json => {

				
				if(json.hasOwnProperty('response') && typeof json.response === 'object'){
					//处理数据格式
					resolve(http.transformResponse(json));
				}else{

					reject(json.error_response);
				}
			})
			.catch(err => reject(err));
	}),


	post: (url, params, payload) => new Promise((resolve, reject) => {



		if (!url) {
			return
		}


		/*

    var bodyParams = [];
    for (var p in payload){
        bodyParams.push(encodeURIComponent(p) + "=" + encodeURIComponent(payload[p]));
    }

    fetch(url, {
			method: 'POST',
		  credentials: 'include',
      mode:'cors',
			headers: {
				'Accept': '*',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
				"Cookie": document.cookie
			},
			body:bodyParams.join('&')
		})
*/


		

		fetch(url, {
			method: 'POST',
			headers: {
				'Accept': '*',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
      mode:'cors',
		  credentials: 'include',
		})
			.then(jsonParse)
			.then(check401)
			.then(http.transformPreResponse)
			.then(json => {
			if(json.hasOwnProperty('response') && typeof json.response === 'object'){
					//处理数据格式
					resolve(http.transformResponse(json));
				}else{
					reject(json.error_response);
				}
			})
			.catch(err => reject(err));
	}),

	update: (url, params, payload) => new Promise((resolve, reject) => {
		const searchParams = new URLSearchParams();

		if (!url) {
			return
		}

		for (const prop in payload) {
			searchParams.set(prop, payload[prop])
		}

		fetch(url, {
			method: 'PUT',
		  credentials: 'include',
      mode:'cors',
			headers: {
				'Accept': '*',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
			body: searchParams
		})
			.then(jsonParse)
			.then(check401)
			.then(http.transformPreResponse)
			.then(json => {
				if(parseInt(json.code)>0){
					//处理数据格式
					resolve(http.transformResponse(json));
				}else{
					reject(json);
				}
			})
			.catch(err => reject(err));
	}),

	remove: (url, params, payload) => new Promise((resolve, reject) => {
		const searchParams = new URLSearchParams();

		if (!url) {
			return
		}

		for (const prop in payload) {
			searchParams.set(prop, payload[prop])
		}

		return fetch(url, {
			method: 'DELETE',
		  credentials: 'include',
      mode:'cors',
			headers: {
				'Accept': '*',
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
			body: searchParams
		})
			.then(jsonParse)
			.then(check401)
			.then(http.transformPreResponse)
			.then(json => {
				if(parseInt(json.code)>0){
					//处理数据格式
					resolve(http.transformResponse(json))
				}else{
					reject(json)
				}
			})
			.catch(err => reject(err));
	}),
}



module.exports = http;
