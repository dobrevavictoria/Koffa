const path = require('path');
const { Router } = require('express');
const AuthRouter = require('./auth.routes');
const ReuseRouter = require('./reuse.routes');
const RecycleRouter = require('./recycle.routes');

module.exports.connect = app => {
  const router = Router();

  router.use('/auth', AuthRouter);
  router.use('/reuse', ReuseRouter);
  router.use('/recycle', RecycleRouter);

  app.use('/api', router);

  app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });
};