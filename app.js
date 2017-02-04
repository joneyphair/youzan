const express = require('express');
const bodyParser = require('body-parser');
const json = require('express-json');
const useragent = require('express-useragent');
const path = require('path')
var dust = require('express-dustjs')

const app = express();



// Dustjs settings 
dust._.optimizers.format = function (ctx, node) {
  return node
}
 
// Define custom Dustjs helper 
dust._.helpers.demo = function (chk, ctx, bodies, params) {
  return chk.w('demo')
}


app.engine('html', dust.engine({
  // Use dustjs-helpers 
  useHelpers: true
}));

app.set('view engine', 'html');

app.set('views', path.resolve(__dirname, './views'))
 

app.use(useragent.express());
app.use(bodyParser.json());
app.use(json());
app.use(bodyParser.urlencoded({
  extended: true
}));

const Router = require('./src/router')(app);
const socket = require('./src/socket')();

Router.listen(8010);
