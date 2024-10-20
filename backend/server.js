const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const pool = require('./db'); // Importa o pool de conexões
const app = express();
const fs = require('fs');
const uploadDir = 'uploads';
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(express.json());

if (!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

const authenticateToken = (req, res, next) => {
    const token = req.headers['authorization']; // Token vem no cabeçalho "Authorization"
    
    if (!token) {
        return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
    }

    try {
        // Verificar o token
        const decoded = jwt.verify(token, 'secret_key'); // Decodificar o token
        req.user = decoded; // Anexar os dados do usuário ao objeto req
        next(); // Prosseguir para a próxima função
    } catch (error) {
        res.status(400).json({ message: 'Token inválido.' });
    }
};

// Configuração do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/'); // Diretório onde as imagens serão salvas
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname)); // Nome único para o arquivo
    }
});

const upload = multer({ storage });
module.exports.upload = upload; // Exporta a configuração do Multer



// Importar e usar as rotas
const gamificationRoutes = require('./routes/gamificationRoutes');
app.use('/api', gamificationRoutes);

const routesAssinatura = require('./routes/routesAssinatura');
app.use('/api/assinaturas', routesAssinatura);

const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = {
    app,
    pool,
    upload,
    authenticateToken
};
