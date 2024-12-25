const sequalize = require('../config/database');
const DataTypes = require('sequelize');

const Student = sequalize.define('Student', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    rollNumber: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    }

});

module.exports = Student;