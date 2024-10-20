// controllers/userController.js
const pool = require('../db');
const bcrypt = require('bcrypt');
const multer = require('multer');
const upload = multer(); // Inicializa o multer
const jwt = require('jsonwebtoken');


// Função para criar um usuário
const createUser = async (req, res) => {
    const { name, email, password, phone } = req.body;
    const profile_image = req.file ? req.file.path : null; // Caminho da imagem

    try {
        // Verificar se o usuário já existe
        const checkUserQuery = 'SELECT * FROM users WHERE email = $1';
        const existingUser = await pool.query(checkUserQuery, [email]);

        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe com esse email.' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Inserir no banco de dados, incluindo a URL da imagem de perfil
        const query = 'INSERT INTO users (name, email, password, phone, profile_image) VALUES ($1, $2, $3, $4, $5) RETURNING *';
        const values = [name, email, hashedPassword, phone, profile_image];

        const result = await pool.query(query, values);

        // Omitir a senha do objeto de retorno
        const { password: _, ...userWithoutPassword } = result.rows[0];

        res.status(201).json({ message: 'Usuário criado com sucesso!', usuario: userWithoutPassword });
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        res.status(500).json({ message: 'Erro ao criar usuário.', error: error.message });
    }
};

// Função para logar usuário
const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Verificar se o usuário existe
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const user = result.rows[0];

        // Comparar a senha fornecida com a senha armazenada
        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        // Omitir a senha do objeto de retorno
        const { password: _, ...userWithoutPassword } = user;
        // Gerar o token JWT
        const token = jwt.sign(
            { id: user.id, email: user.email }, // Payload do token
            'secret_key', // Chave secreta (use uma variável de ambiente para maior segurança)
            { expiresIn: '1h' } // Expiração do token
        );

        res.status(200).json({ message: 'Login realizado com sucesso!', usuario: userWithoutPassword });
    } catch (error) {
        console.error('Erro ao fazer login:', error);
        res.status(500).json({ message: 'Erro ao fazer login.', error: error.message });
    }
};

module.exports = {
    createUser,
    loginUser
};
