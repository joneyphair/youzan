const mongoose = require('mongoose');

const NewsSchema =  require('../Schema/News');

const NewsModel  = mongoose.model('News',NewsSchema);

module.exports = NewsModel;
