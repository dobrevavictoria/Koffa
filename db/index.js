const mongoose = require('mongoose');

module.exports.connect = () =>
  mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
    .then(() => console.log('Connected to database.'))
    .catch(err => Promise.reject(err));
