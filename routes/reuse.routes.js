const {Router} = require('express');
const reuseController = require('../controllers/reuse.controllers');
const router = Router();

router.route('/item').post(reuseController.add);
router.route('/items').get(reuseController.show);

module.exports = router;