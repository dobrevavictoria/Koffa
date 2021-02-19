const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const saltRounds = 10;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  ecolevs: { type: Number, default: 1000 }
});

UserSchema.pre('save', function (next) {
  if (this.isNew || this.isModified('password')) {
    // Saving reference to this because of changing scopes
    const document = this;

    bcrypt.hash(document.password, saltRounds,
      function (err, hashedPassword) {
        if (err) {
          next(err);
        }
        else {
          document.password = hashedPassword;
          next();
        }
      });
  } else {
    next();
  }
});

UserSchema.methods.isCorrectPassword = function (password, callback) {
  bcrypt.compare(password, this.password, function (err, same) {
    err ? callback(err) : callback(err, same);
  });
};

module.exports = mongoose.model('User', UserSchema);