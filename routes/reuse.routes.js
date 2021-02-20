const { Router } = require('express');
const reuseController = require('../controllers/reuse.controllers');
const { withAuth } = require('../middleware/auth');
const router = Router();

router.route('/items').post(withAuth, reuseController.create);
router.route('/items').get(withAuth, reuseController.fetch);
router.route('/items/:id').delete(withAuth, reuseController.buy);

module.exports = router;