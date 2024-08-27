const express = require('express');
const router = express.Router();
const { Pool } = require('pg');
const config = require('../config/config');
const pool = new Pool(config);
const upload = require('../server').upload; // Importa o multer configurado


// Endpoint para criar uma nova regra de gamificação com upload de imagem
router.post('/gamification-rules', upload.single('logo_image_url'), async (req, res) => {
    const {
        primary_color,
        secondary_color,
        background_color,
        title,
        description,
        score_title,
        observation_title,
        observation_text,
        rules
    } = req.body;
    const logo_image_url = req.file ? req.file.path : null;

    try {
        const query = `
            INSERT INTO gamification_rules (
                logo_image_url, 
                primary_color, 
                secondary_color, 
                background_color, 
                title, 
                description, 
                score_title, 
                observation_title, 
                observation_text
            )
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;
        `;

        const values = [
            logo_image_url,
            primary_color,   // Converte string vazia para null
            secondary_color, // Converte string vazia para null
            background_color,// Converte string vazia para null
            title,
            description,
            score_title,
            observation_title,
            observation_text
        ];

        const result = await pool.query(query, values);

        const gamificationRuleId = result.rows[0].id;

        // Inserir os pontos das regras, se houver
        if (rules && Array.isArray(rules)) {
            for (const rule of rules) {
                await pool.query(
                    `INSERT INTO rule_points (gamification_rule_id, rule_name, points) VALUES ($1, $2, $3)`,
                    [gamificationRuleId, rule.name, rule.points]
                );
            }
        }

        res.status(201).json({ id: gamificationRuleId, message: 'Regra de gamificação criada com sucesso!' });
    } catch (error) {
        console.error('Erro ao criar regra de gamificação:', error);
        res.status(500).json({ error: 'Erro ao criar regra de gamificação' });
    }
});

// Rota para buscar todas as regras de gamificação
router.get('/gamification-rules', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM gamification_rules');
        res.json(result.rows);
    } catch (err) {
        console.error('Erro ao buscar regras de gamificação:', err);
        res.status(500).json({ error: 'Erro ao buscar regras de gamificação' });
    }
});

// Rota para atualizar uma regra de gamificação existente
router.put('/gamification-rules/:id', upload.single('logo_image'), async (req, res) => {
    const { id } = req.params;
    const { primary_color, secondary_color, background_color, title, description, score_title, observation_title, observation_text } = req.body;
    const logoImagePath = req.file ? req.file.path : null;

    try {
        // Monta a query SQL dinamicamente para incluir apenas os campos que foram atualizados
        let query = `
            UPDATE gamification_rules
            SET 
                primary_color = COALESCE($1, primary_color),
                secondary_color = COALESCE($2, secondary_color),
                background_color = COALESCE($3, background_color),
                title = COALESCE($4, title),
                description = COALESCE($5, description),
                score_title = COALESCE($6, score_title),
                observation_title = COALESCE($7, observation_title),
                observation_text = COALESCE($8, observation_text)
        `;
        let values = [primary_color, secondary_color, background_color, title, description, score_title, observation_title, observation_text];

        // Se uma nova imagem foi enviada, adiciona à query
        if (logoImagePath) {
            query += `, logo_image_url = $9 `;
            values.push(logoImagePath);
        }

        query += ` WHERE id = $${values.length + 1} RETURNING *;`;
        values.push(id);

        const result = await pool.query(query, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Regra de gamificação não encontrada' });
        }

        res.json(result.rows[0]);
    } catch (error) {
        console.error('Erro ao atualizar regra de gamificação:', error);
        res.status(500).json({ error: 'Erro ao atualizar regra de gamificação' });
    }
});

// Rota para deletar uma regra de gamificação existente
router.delete('/gamification-rules/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Primeiro, deletar os pontos associados a essa regra de gamificação
        await pool.query('DELETE FROM rule_points WHERE gamification_rule_id = $1', [id]);

        // Em seguida, deletar a regra de gamificação em si
        const result = await pool.query('DELETE FROM gamification_rules WHERE id = $1 RETURNING *;', [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'Regra de gamificação não encontrada' });
        }

        res.status(200).json({ message: 'Regra de gamificação deletada com sucesso', deletedRule: result.rows[0] });
        
    } catch (error) {
        console.error('Erro ao deletar regra de gamificação:', error);
        res.status(500).json({ error: 'Erro ao deletar regra de gamificação' });
    }
});

module.exports = router;
