const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const bcrypt = require('bcrypt'); // Biblioteca para hash de senha
const jwt = require('jsonwebtoken'); // Biblioteca para geração de token JWT
const bodyParser = require('body-parser');
const app = express();

// Configuração da conexão com o banco de dados PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NoDesing',
    password: '',
    port: 5432, // Porta padrão do PostgreSQL
});

app.use(cors());
// Middleware para analisar o corpo da solicitação como JSON
app.use(bodyParser.json());


// Função para criar um novo usuário com hash de senha
async function createUser(username,email, password) {
    try {
        // Gerar um hash seguro da senha
        const hashedPassword = await bcrypt.hash(password, 10); // 10 é o número de rounds de hashing

        // Salvar o usuário no banco de dados com o hash da senha
        // Por exemplo, usando uma consulta SQL
        const query = 'INSERT INTO users (username, email, password) VALUES ($1, $2, $3)';
        await pool.query(query, [username, email, hashedPassword]);

        return { success: true };
    } catch (error) {
        console.error('Erro ao criar usuário:', error);
        return { success: false, error: 'Erro ao criar usuário' };
    }
}

// Rota de login
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    console.log('Senha fornecida:', password);

    try {
        // Consultar o banco de dados para verificar se o usuário existe
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);

        console.log('Resultado da consulta:', result.rows);

        // Verificar se o usuário existe e se a senha está correta
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Usuário não encontrado' });
        }

        const user = result.rows[0];
        const storedPasswordHash = user.password;

        console.log('Senha armazenada no banco de dados:', storedPasswordHash);
        console.log('Hash da senha armazenada no banco de dados:', storedPasswordHash);
        

        // Verificar se a senha fornecida pelo usuário corresponde à senha armazenada
        const passwordMatch = await bcrypt.compare(password, storedPasswordHash);

        console.log('Resultado da comparação de senhas:', passwordMatch);

        if (!passwordMatch) {
            return res.status(401).json({ error: 'Senha incorreta' });
        }

        // Se as credenciais estiverem corretas, gera um token JWT
        const token = jwt.sign({ userId: user.id }, 'chave_secreta');
        res.json({ token });
    } catch (error) {
        console.error('Erro ao consultar banco de dados:', error);
        res.status(500).json({ error: 'Erro ao consultar banco de dados' });
    }
});


// Rota para criar um novo usuário
app.post('/usuarios', async (req, res) => {
    const { username,email , password } = req.body;

    // Chamar a função createUser para criar um novo usuário
    const result = await createUser(username,email, password);

    // Verificar o resultado da criação do usuário e enviar resposta adequada ao cliente
    if (result.success) {
        res.json({ message: 'Usuário criado com sucesso' });
    } else {
        res.status(500).json({ error: result.error });
    }
});

// Inicia o servidor e ouve as requisições
const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
