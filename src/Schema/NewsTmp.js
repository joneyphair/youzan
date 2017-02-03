const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NewsTmp  =  new Schema({
  title: { type: String, default: 'hahaha' },
  image_url: { type: Number, min: 18, index: true },
  desc: { type: String},
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

module.exports =  NewsTmp;
