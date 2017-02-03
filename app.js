const express = require('express');
const bodyParser = require('body-parser');
const json = require('express-json');
const useragent = require('express-useragent');

const app = express();


 app.use(useragent.express());
app.use(bodyParser.json());
app.use(json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const Router = require('./src/router')(app);

Router.listen(8010);
