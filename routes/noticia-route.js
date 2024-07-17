const router = require('express').Router();

const noticiaController = require('../controllers/noticia-controller');

router.post('/create', noticiaController.create);
router.get('/', noticiaController.getAllNoticias);

module.exports = router;