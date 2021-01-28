const path = require('path');
const { Router } = require('express');
const AuthRouter = require('./auth.routes');

module.exports.connect = app => {
  const router = Router();

  router.use('/auth', AuthRouter);

  app.use('/api', router);
  
  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
};