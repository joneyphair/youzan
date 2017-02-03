const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const News  =  new Schema({
  title: { type: String, default: 'hahaha' },
  image_url: { type: String},
  desc: { type: String},
  keywords: { type: String},
  content: { type: String},
  website_url: { type: String},
  origin_url: { type: String},
  update_at: { type: Date, default: Date.now },
});

/*
News.pre('save', function (next) {
  next();
});
*/

module.exports =  News;
