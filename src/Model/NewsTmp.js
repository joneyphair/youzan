const mongoose = require('mongoose');

const NewsTmpSchema =  require('../Schema/NewsTmp');

const NewsTmpModel  = mongoose.model('NewsTmp',NewsTmpSchema);

module.exports = NewsTmpModel;
