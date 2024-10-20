const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../server').upload; // Importa o upload configurado


// Rota para criar usuário com form-data
router.post('/create', upload.single('profile_image'), userController.createUser);



// Rota para logar usuário
router.post('/login', upload.none(), userController.loginUser); // Rota de login


module.exports = router;
