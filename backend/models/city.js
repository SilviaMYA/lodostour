
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let City = new Schema({
    name:{
      type: String
    },
    country:{
      type: String
    },
    code_country:{
      type: String
    }

});

module.exports = mongoose.model('City', City);