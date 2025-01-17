const router = require('express').Router();

const userController = require('../controllers/user-controller');

router.post('/login', userController.login);
router.post('/create', userController.create);
router.get('/', userController.getAllUsers);


module.exports = router;