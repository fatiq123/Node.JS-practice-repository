const {Sequelize} = require('sequelize');
const dbConfig = require('../config/config.database');

// Database Connection
const sequelize = new Sequelize(dbConfig.database, dbConfig.username, dbConfig.password, {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    logging: false, // Disable logging in production
});

module.exports = sequelize;
