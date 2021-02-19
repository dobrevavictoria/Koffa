const { Router } = require('express');
const reuseController = require('../controllers/reuse.controllers');
const router = Router();

router.route('/item').post(reuseController.create);
router.route('/items').get(reuseController.fetch);

module.exports = router;