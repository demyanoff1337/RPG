'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Role, { foreignKey: 'role_id' });
      this.hasOne(models.Person, { foreignKey: 'user_id' });
    }
  }
  User.init({
    role_id: DataTypes.INTEGER,
    nickname: DataTypes.STRING,
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    mail: DataTypes.TEXT,
    password: DataTypes.TEXT,
    avatar: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};
