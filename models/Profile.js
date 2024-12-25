// const sequelize = require('../config/database');
// const { DataTypes } = require('sequelize');

// const Profile = sequelize.define('Profile', {
//     bio: {
//         type: DataTypes.STRING,
//     },
// });

// Profile.associate = (models) => {
//     Profile.belongsTo(models.User, {
//         foreignKey: 'userId',
//         // onDelete: 'CASCADE',
//     });
// }

// module.exports = Profile;



module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define('Profile', {
      bio: {
        type: DataTypes.STRING,
      },
    });
  
    Profile.associate = (models) => {
      Profile.belongsTo(models.User, {
        foreignKey: 'userId',
      });
    };
  
    return Profile;
  };
  