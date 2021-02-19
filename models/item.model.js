const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: String },
  subheader: { type: String },
  imageBuffer: { data: Buffer, contentType: String },
  available: { type: Boolean, default: true }
});

ItemSchema.pre('save', function (next) {
  var months = ['Jan', 'Feb', 'Mar', 'Apr', "May", 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var today = new Date();
  var d = String(today.getDate()).padStart(2, '0');
  var m = String(months[today.getMonth() + 1]).padStart(2, '0');
  var y = today.getFullYear();
  this.date = d + ' ' + m + ' ' + y;
  this.subheader = this.category + '\n' + this.city + ', ' + this.date;
  
  next();
});

module.exports = mongoose.model('Item', ItemSchema);