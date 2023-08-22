const mongoose = require('mongoose');

// mongoose.plugin(slug);


const Schema = mongoose.Schema;



const Users = new Schema({
  
  username: { type: String, maxLength:255 , required: true},
  password: { type: String,minLength:4, maxLength:16,required: true},
  email: { type: String, maxLength:255 , required: true},
},{
  timestamps: true,
});

module.exports = mongoose.model('Users', Users);