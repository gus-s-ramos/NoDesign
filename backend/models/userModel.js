// models/userModel.js
const { pool } = require('../server');

// Função para inserir um usuário no banco de dados
async function insertUser(dados) {
    const { name, email, password, phone, profile_image } = dados;

    // Validação simples (pode ser melhorada com uma biblioteca de validação)
    if (!name || !email || !password || !phone) {
        throw new Error('Todos os campos são obrigatórios.');
    }

    try {
        const query = 'INSERT INTO users (name, email, password, phone, profile_image) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [name, email, password, phone, profile_image];

        const result = await pool.query(query, values);
        // Omitir a senha antes de retornar
        const { password: _, ...userWithoutPassword } = result.rows[0];
        return userWithoutPassword;
    } catch (error) {
        console.error('Erro na query:', error.message);
        throw new Error('Erro ao inserir usuário.'); // Mensagem de erro genérica
    }
}

// Função para verificar se um e-mail já está cadastrado
const findUserByEmail = async (email) => {
    const query = 'SELECT * FROM users WHERE email = $1';
    const result = await pool.query(query, [email]);
    
    // Omitir a senha antes de retornar
    if (result.rows.length > 0) {
        const { password: _, ...userWithoutPassword } = result.rows[0];
        return userWithoutPassword;
    }
    return null; // Retornar null se não encontrar
};

module.exports = {
    insertUser,
    findUserByEmail
};
