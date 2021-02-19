const {Router} = require('express');
const reuseController = require('../controllers/reuse.controllers');
const router = Router();

router.route('/add').post(reuseController.add);
//router.route('/items').post(reuseController.items);
router.route('/items/show').get(reuseController.show);

module.exports = router;