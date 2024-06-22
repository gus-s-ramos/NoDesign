const express = require('express');
const router = express.Router();

// Rota GET para a página de perfil do usuário
router.get('/perfil', (req, res) => {
    res.send('Esta é a página do perfil do usuário');
});

// Exporta o router para ser usado em outro lugar
module.exports = router;
