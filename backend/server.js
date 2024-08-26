// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const multer = require('multer');
const path = require('path');
const config = require('./config/config');

const app = express();
const pool = new Pool(config);

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));
app.use(express.json());

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
module.exports.upload = upload; // Exporta a configuração do Multer

// Importar e usar as rotas
const gamificationRoutes = require('./routes/gamificationRoutes');
app.use('/api', gamificationRoutes);

const routesAssinatura = require('./routes/routesAssinatura');
app.use('/api/assinaturas', routesAssinatura);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = {
    pool,
    upload
};