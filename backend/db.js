const { Pool } = require('pg');
const config = require('./config/config');

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'NoDesing',
    password: '1310',
    port: 5432
});

module.exports = pool; // Certifique-se de exportar o pool
