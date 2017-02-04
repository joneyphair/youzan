const {
  HomeController,
  SalesManController,
  UserController,
  WechatFansController,
  ShopController,
  GoodsController,
  TradeController,
  CouponsController,
  SpiderController
} = require('./Controller');


module.exports = function(app){



app.get('/',HomeController.index);



//spider
app.get('/spider',SpiderController.index);


//shop
app.get('/shop/basic',ShopController.basic);

//trade
app.get('/shop/trade/sold',TradeController.sold);
app.get('/shop/trade',TradeController.items);


//CouponsController
app.get('/shop/coupons/unfinished',CouponsController.unfinished);
app.get('/shop/coupons/take',CouponsController.take);
app.get('/shop/coupons/logs',CouponsController.logs);

//goods
app.get('/shop/goods',GoodsController.items);

app.get('/shop/goods/onsale',GoodsController.onsale);
app.get('/shop/goods/inventory',GoodsController.inventory);


//wechat-fans

 app.get('/user/wechat/fans',WechatFansController.fans);
  app.get('/user/wechat/fans/tag/add',WechatFansController.fansAddTags);
 app.get('/user/wechat/fans/detail',WechatFansController.detail);
 app.get('/user/wechat/basic',WechatFansController.basic);

  app.get('/user/salesman/apply',SalesManController.apply);


  app.get('/user/salesman/remove',SalesManController.remove);

  return app;

}
