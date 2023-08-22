const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
// mongoose.plugin(slug);


const Schema = mongoose.Schema;



const Course = new Schema({
  
  name: { type: String, maxLength:255},
  description: String,
  img: String,
  cost: String,
  videoId: String,
  slug: { type: String, slug: 'name' }
},{
  timestamps: true,
});

module.exports = mongoose.model('Course', Course);