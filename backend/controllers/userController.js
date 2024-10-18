// controllers/userController.js
const pool = require('../config/config');
const bcrypt = require('bcrypt');

console.log('Pool:', pool);

// Função para criar um usuário
const createUser = async (req, res) => {
    console.log('Chamada da função createUser');

    const { name, email, password, phone } = req.body;



    // Validação simples
    if (!name || !email || !password || !phone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    try {
        // Verificar se o usuário já existe
        const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
        const existingUser = await pool.query(checkUserQuery, [email]);

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe com esse email.' });
        }
        console.log('Oi passei aqui');
        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserir no banco de dados
        const query = 'INSERT INTO users (name, email, phone, password) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, email, phone, hashedPassword]; // Use a senha criptografada

        const result = await pool.query(query, values);

        // Omitir a senha do objeto de retorno
        const { password: _, ...userWithoutPassword } = result.rows[0];

        res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: userWithoutPassword });
    } catch (error) {
        console.error('Erro ao criar usuário:', error); // Log do erro detalhado
        res.status(500).json({ message: 'Erro ao criar usuário.', error: error.message }); // Mensagem de erro detalhada
    }
};

module.exports = {
    createUser
};
