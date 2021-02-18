const { Router } = require('express');
const recycleController = require('../controllers/recycle.controllers');

const router = Router();

router.route('/places').post(recycleController.places);
router.route('/places/show').get(recycleController.show);

module.exports = router;
