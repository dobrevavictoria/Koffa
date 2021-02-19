const { createToken } = require('../middleware/auth');
const User = require('../models/user.model');

module.exports = {
  register: (req, res) => {
    const { email, password } = req.fields;
    const user = new User({ email, password });

    user.save(function (err) {
      if (err) {
        if (11000 === err.code) {
          res.status(409).json({ error: 'Email is already registered.' });
        }
        else {
          res.status(500).json({ error: 'Error registering new user please try again.' });
        }
      } else {
        res.status(200).json({ info: 'Welcome to the club.' });
      }
    });
  },

  login: (req, res) => {
    const { email, password } = req.fields;

    User.findOne({ email }, function (err, user) {
      if (err) {
        console.error(err);
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      } else if (!user) {
        res.status(401).json({
          error: 'Incorrect email or password'
        });
      } else {
        user.isCorrectPassword(password, function (err, same) {
          if (err) {
            res.status(500).json({
              error: 'Internal error please try again'
            });
          } else if (!same) {
            res.status(401).json({
              error: 'Incorrect email or password'
            });
          } else {
            const payload = { email };

            createToken(payload).then(token => {
              res.cookie('token', token, { httpOnly: true, maxAge: 60 * 60 * 1000 }).sendStatus(200);
            });
          }
        });
      }
    });
  },

  checkToken: (req, res) => {
    res.status(200).json();
  },

  getUserInfo: (req, res) => {
    const email = req.user;

    User.findOne({ email }, function (err, user) {
      if (err || !user) {
        res.status(500)
          .json({
            error: 'Internal error please try again'
          });
      } else {
        const {email, ecolevs} = user;
        res.status(200).json({email, ecolevs});
      }
    });
  }
}