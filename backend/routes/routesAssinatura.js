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

// Rota para buscar todas as assinaturas
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM assinaturas');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar assinaturas:', err);
        res.status(500).json({ error: 'Erro ao buscar assinaturas' });
    }
});

// Rota para atualizar uma assinatura existente
router.put('/:id', upload.single('imagem'), async (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, cargo, telefone, email } = req.body;
    const imagem = req.file ? req.file.path : null; // Pega o caminho da nova imagem, se enviada

    try {
        // Monta a query SQL dinamicamente para incluir apenas os campos que foram atualizados
        let query = `
            UPDATE assinaturas 
            SET 
                nome = COALESCE($1, nome),
                sobrenome = COALESCE($2, sobrenome),
                cargo = COALESCE($3, cargo),
                telefone = COALESCE($4, telefone),
                email = COALESCE($5, email)
        `;
        let values = [nome, sobrenome, cargo, telefone, email];

        // Se uma nova imagem foi enviada, adiciona à query
        if (imagem) {
            query += `, imagem = $6 `;
            values.push(imagem);
        }

        query += ` WHERE id = $${values.length + 1} RETURNING *;`;
        values.push(id);

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Assinatura não encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar assinatura:', error);
        res.status(500).json({ error: 'Erro ao atualizar assinatura' });
    }
});

module.exports = router;
