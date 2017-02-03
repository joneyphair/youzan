const  SpiderPageConfigs = require('../Configs').spiderPage;

const page = require('webpage').create();
const system = require('system');

//配置
page.settings.userAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/37.0.2062.120 Safari/537.36';
page.viewportSize = {
  width: 1500,
  height: 1000
};



var  websiteUrl =  'https://koudaitong.com/v2/dashboard/index' || SpiderPageConfigs[system.args[1]] || '';

page.onConsoleMessage = function(msg) {
	console.log(msg);
};

page.open(websiteUrl, function (status) {

  if (status === 'fail') {

      page.close();
	    phantom.exit();
      return ;
  }

     page.render('google_home.jpeg', {format: 'jpeg', quality: '100'});
	
     //var news = page.evaluate(NewsDetail);
		//console.log(JSON.stringify(news));

	   phantom.exit();
});
