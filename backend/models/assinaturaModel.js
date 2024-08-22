// models/assinaturaModel.js
const pool = require('../config/config');

async function salvarAssinatura(dados) {
    try {
        const query = `
            INSERT INTO signatures 
            (user_id, first_name, last_name, position, phone_number, email, cropped_image_url) 
            VALUES 
            ($1, $2, $3, $4, $5, $6, $7, $8) 
            RETURNING *`;
        
        const values = [
            dados.user_id,
            dados.first_name,
            dados.last_name,
            dados.position,
            dados.phone_number,
            dados.email,
            dados.cropped_image_url,
        ];

        const result = await pool.query(query, values);
        return result.rows[0];
    } catch (error) {
        console.error('Erro na query:', error.message);
        throw error;
    }
}

async function buscarAssinatura(id) {
    const query = 'SELECT * FROM signatures WHERE id = $1';
    const result = await pool.query(query, [id]);
    return result.rows[0];
}

async function atualizarAssinatura(id, dados) {
    const query = 'UPDATE signatures SET imagem = $1, nome = $2, sobrenome = $3, cargo = $4, telefone = $5, email = $6 WHERE id = $7 RETURNING *';
    const values = [dados.imagem, dados.nome, dados.sobrenome, dados.cargo, dados.telefone, dados.email, id];
    const result = await pool.query(query, values);
    return result.rows[0];
}

module.exports = { salvarAssinatura, buscarAssinatura, atualizarAssinatura };
