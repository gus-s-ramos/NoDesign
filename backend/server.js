// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const config = require('./config/config');

const app = express();
const pool = new Pool(config);

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));


// Configuração do Multer
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});
const upload = multer({ storage });

if (!fs.existsSync('uploads')) {
    fs.mkdirSync('uploads');
}

// Exporta a instância do upload
module.exports.upload = upload;

// Importar e usar as rotas
const routesAssinatura = require('./routes/routesAssinatura');
app.use('/api/assinaturas', routesAssinatura);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
