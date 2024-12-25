const sequalize = require('../config/database');
const DataTypes = require('sequelize');

const Course = sequalize.define('Course', {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    },
    creditHours: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

});

module.exports = Course;