const mongoose = require('mongoose');

const ItemSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    city: { type: String, required: true },
    price: { type: Number, required: true }
  //  image: { data: Buffer, contentType: String }

});

module.exports = mongoose.model('Item', ItemSchema);