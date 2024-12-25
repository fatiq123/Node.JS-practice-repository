const sequalize = require('../config/database');
const DataTypes = require('sequelize');

const Course = sequalize.define('Course', {

    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.TEXT,
    }

});

module.exports = Course;