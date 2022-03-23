'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Armor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Person, { foreignKey: 'armor_id' });
      this.hasMany(models.Inventory, { foreignKey: 'armor_id' });
    }
  }
  Armor.init({
    title: DataTypes.STRING,
    price: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    dodge: DataTypes.INTEGER,
    contattack: DataTypes.INTEGER,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Armor',
  });
  return Armor;
};
