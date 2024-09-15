const pool = require('../config/config');

async function salvarAssinatura(dados) {
    try {
        const query = `
            INSERT INTO signatures 
            (user_id, first_name, last_name, position, phone_number, email, cropped_image_url) 
            VALUES 
            ($1, $2, $3, $4, $5, $6, $7) 
            RETURNING *`;
        
        const values = [
            dados.user_id,
            dados.first_name,
            dados.last_name,
            dados.position,
            dados.phone_number,
            dados.email,
            dados.cropped_image_url
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
    const query = `
        UPDATE signatures 
        SET 
            user_id = $1, 
            first_name = $2, 
            last_name = $3, 
            position = $4, 
            phone_number = $5, 
            email = $6, 
            cropped_image_url = $7 
        WHERE id = $8 
        RETURNING *`;
    
    const values = [
        dados.user_id,
        dados.first_name,
        dados.last_name,
        dados.position,
        dados.phone_number,
        dados.email,
        dados.cropped_image_url,
        id
    ];
    
    const result = await pool.query(query, values);
    return result.rows[0];
}

module.exports = { salvarAssinatura, buscarAssinatura, atualizarAssinatura };
