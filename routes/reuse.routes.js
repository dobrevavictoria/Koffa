const {Router} = require('express');
const reuseController = require('../controllers/reuse.controllers');
const router = Router();

router.route('/add').post(reuseController.add);
router.route('/items').get(reuseController.items);

module.exports = router;