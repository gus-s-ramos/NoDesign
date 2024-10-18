// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const upload = require('../server').upload;
const bcrypt = require('bcrypt');
const multer = require('multer');
const userController = require('../controllers/userController'); // Importe o controller corretamente


// Rota para criar um usuário
router.post('/', userController.createUser);

module.exports = router;
