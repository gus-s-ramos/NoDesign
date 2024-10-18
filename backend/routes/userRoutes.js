const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const multer = require('multer');
const upload = multer(); // Inicializa o multer


// Rota para criar usuário com form-data
router.post('/', upload.none(), userController.createUser);

module.exports = router;
