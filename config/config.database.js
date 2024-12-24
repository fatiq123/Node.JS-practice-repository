module.exports = {
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'test',
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    dialect: 'mysql',
};
