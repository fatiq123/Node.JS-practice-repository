const sequelize = require('../config/database');
const DataTypes = require('sequelize');

const Teacher = sequelize.define('Teacher', {

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    department: {
        type: DataTypes.STRING,
    },

});

module.exports = Teacher;