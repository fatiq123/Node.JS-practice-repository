require('dotenv').config();
const express = require('express');
const syncDatabase = require('./config/sync');
const logger = require('./middlewares/logger');
const userRoutes = require('./routes/userRoutes');


const app = express();
const PORT = process.env.PORT || 3000;

// Body-parser Parse JSON bodies -> Now comming by default with express
app.use(express.json());

// for logging
app.use(logger);

// Routes
app.use('/api', userRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


// Sync file is also doing same thing as below code
// Test database connection
// sequelize.authenticate()
//     .then(() => console.log('Database connected.'))
//     .catch(err => console.error('Database connection failed:', err));

// sequelize.sync({ force: false }) // Use `force: true` to drop and recreate tables
//     .then(() => {
//         console.log('Database synchronized');
//     })
//     .catch(err => {
//         console.error('Error synchronizing database:', err);
//     });



// Sync database and start server
syncDatabase()
    .then(() => {
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error('Failed to start server:', err.message));

module.exports = app;

