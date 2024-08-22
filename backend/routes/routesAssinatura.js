const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const config = require('../config/config');
const pool = new Pool(config);
const upload = require('../server').upload; // Importa o upload configurado

// Rota para salvar a assinatura
router.post('/', upload.single('imagem'), async (req, res) => {
    const { nome, sobrenome, cargo, telefone, email } = req.body;
    const imagem = req.file ? req.file.path : null; // Pega o caminho da imagem enviada
    
    try {
        const query = `
            INSERT INTO assinaturas (nome, sobrenome, cargo, telefone, email, imagem)
            VALUES ($1, $2, $3, $4, $5, $6) RETURNING *;
        `;
        const values = [nome, sobrenome, cargo, telefone, email, imagem];
        const result = await pool.query(query, values);
        res.status(201).json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao salvar assinatura:', error);
        res.status(500).json({ error: 'Erro ao salvar assinatura' });
    }
});

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM assinaturas');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar assinaturas:', err);
        res.status(500).json({ error: 'Erro ao buscar assinaturas' });
    }
});

module.exports = router;
