const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    date: {type:Date, default: Date.now, required:true},
    description: { type: String, required: true }
});


module.exports = mongoose.model('Post', postSchema);

