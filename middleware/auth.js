const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

module.exports.createToken = payload => {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, JWT_SECRET, { expiresIn: '30m' }, function (err, token) {
      return (err ? reject(err) : resolve(token));
    });
  });
}

module.exports.verifyToken = token => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, JWT_SECRET, function (err, decoded) {
      return (err ? reject(err) : resolve(decoded));
    });
  });
}

module.exports.withAuth = (req, res, next) => {
  const token = req.cookies['token'] || '';

  this.verifyToken(token)
    .then((decoded) => {
      req.user = decoded.email;
      next();
    })
    .catch(() => res.status(401).json({ error: 'Unauthorized' }))
}