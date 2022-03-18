'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Inventory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Weapon, { foreignKey: 'weapon1_id' });
      this.belongsTo(models.Weapon, { foreignKey: 'weapon2_id' });
      this.belongsTo(models.Weapon, { foreignKey: 'weapon3_id' });
      this.belongsTo(models.Armor, { foreignKey: 'armor1_id' });
      this.belongsTo(models.Armor, { foreignKey: 'armor2_id' });
      this.belongsTo(models.Armor, { foreignKey: 'armor3_id' });
      this.belongsTo(models.Flask, { foreignKey: 'flask1_id' });
      this.belongsTo(models.Flask, { foreignKey: 'flask2_id' });
      this.belongsTo(models.Skill, { foreignKey: 'skill1_id' });
      this.belongsTo(models.Skill, { foreignKey: 'skill2_id' });
      this.hasOne(models.Person, { foreignKey: 'inventory_id' })
    }
  }
  Inventory.init({
    weapon1_id: DataTypes.INTEGER,
    weapon2_id: DataTypes.INTEGER,
    weapon3_id: DataTypes.INTEGER,
    armor1_id: DataTypes.INTEGER,
    armor2_id: DataTypes.INTEGER,
    armor3_id: DataTypes.INTEGER,
    flask1_id: DataTypes.INTEGER,
    flask2_id: DataTypes.INTEGER,
    skill1_id: DataTypes.INTEGER,
    skill2_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};
