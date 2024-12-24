// // this is ok to make a new file and write code for syncing database but I have done it in index.js file.
// const sequelize = require('./database');
// const User = require('../models/User');

// const syncDatabase = async() => {
//     try {
//         await sequelize.authenticate(); // Test database connection
//         console.log('Connection has been established successfully.');

//         // Sync all models
//         await sequelize.sync({ alter: true }); // Use `force: true` to drop and recreate tables
//         console.log('Database synchronized.');
        
//     } catch (error) {
//         console.error('Unable to connect to the database:', error);
//     }
//     finally {
//         await sequelize.close();
//     }
// }

const sequelize = require('./database');

const syncDatabase = async () => {
    try {
        await sequelize.sync({ force: false }); // Use force: true to drop tables before sync
        console.log('Database synced successfully.');
    } catch (error) {
        console.error('Error syncing database:', error.message);
    }
};

module.exports = syncDatabase;
