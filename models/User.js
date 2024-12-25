// const DataTypes = require('sequelize');
// const sequelize = require('../config/database');

// const User = sequelize.define('User', {
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     age: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },
// }, {
//     timestamps: true,   // Adds `createdAt` and `updatedAt` fields  
// });

// User.associate = (models) => {
//     User.hasOne(models.Profile, {
//         foreignKey: 'userId',
//         // as: 'profile',
//         // onDelete: 'CASCADE',
//     });
// }

// module.exports = User;





module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    User.associate = (models) => {
      User.hasOne(models.Profile, {
        foreignKey: 'userId',
      });
    };
  
    return User;
  };
  