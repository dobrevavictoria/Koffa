const { Router } = require('express');
const recycleController = require('../controllers/recycle.controllers');

const router = Router();

router.route('/places').post(recycleController.create);
router.route('/places').get(recycleController.fetch);

module.exports = router;
