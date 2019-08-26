
const mongoose = require('mongoose');
const Schema =  mongoose.Schema;

let Contact = new Schema({
    full_name:{
      type: String
    },
    email:{
      type: String
    },
    phone_number:{
      type: String
    },
    message:{
      type: String
    }
});

module.exports = mongoose.model('Contact', Contact);