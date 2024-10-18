// controllers/userController.js
const pool = require('../db');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = multer(); // Inicializa o multer sem armazenamento de arquivos

// Função para criar um usuário
const createUser = async (req, res) => {
    console.log('Chamada da função createUser');
    console.log('Dados recebidos:', req.body); // Isso mostrará o que está sendo recebido


    // O multer irá parsear o form-data e colocar os dados em req.body
    const { name, email, password, phone } = req.body;

    console.log('Dados recebidos:', { name, email, password, phone });

    try {
        // Verificar se o usuário já existe
        const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
        const existingUser = await pool.query(checkUserQuery, [email]);

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe com esse email.' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserir no banco de dados
        const query = 'INSERT INTO users (name, email, password, phone ) VALUES ($1, $2, $3, $4) RETURNING *';
        const values = [name, email, hashedPassword,  phone];

        const result = await pool.query(query, values);

        // Omitir a senha do objeto de retorno
        const { password: _, ...userWithoutPassword } = result.rows[0];

        res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: userWithoutPassword });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro ao criar usuário.', error: error.message });
    }
};

module.exports = {
    createUser
};
