const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  city: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date },
  imageBuffer: { data: Buffer, contentType: String },
  available: { type: Boolean, default: true }
});

ItemSchema.pre('save', function (next) {
  this.date = new Date();
  next();
});

module.exports = mongoose.model('Item', ItemSchema);