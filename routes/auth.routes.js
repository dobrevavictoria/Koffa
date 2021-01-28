const { Router } = require('express');
const authController = require('../controllers/auth.controllers');
const { withAuth } = require('../middleware/auth');

const router = Router();

router.route('/register').post(authController.register);
router.route('/login').post(authController.login);

router.route('/checkToken').get(withAuth, authController.checkToken);

module.exports = router;