'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Weapon extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Person, { foreignKey: 'weapon_id' });
      this.hasMany(models.Inventory, { foreignKey: 'weapon_id' });
    }
  }
  Weapon.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    bleeding: DataTypes.INTEGER,
    critical: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Weapon',
  });
  return Weapon;
};
