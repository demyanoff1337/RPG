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
      this.belongsTo(models.Weapon, { foreignKey: 'weapon_id' });
      this.belongsTo(models.Armor, { foreignKey: 'armor_id' });
      this.belongsTo(models.Flask, { foreignKey: 'flask1_id' });
      this.belongsTo(models.Flask, { foreignKey: 'flask2_id' });
      this.belongsTo(models.Flask, { foreignKey: 'flask3_id' });
      this.belongsTo(models.Flask, { foreignKey: 'flask4_id' });
      this.belongsTo(models.Skill, { foreignKey: 'skill_id' });
      this.hasOne(models.Person, { foreignKey: 'inventory_id' })
    }
  }
  Inventory.init({
    weapon_id: DataTypes.INTEGER,
    armor_id: DataTypes.INTEGER,
    flask1_id: DataTypes.INTEGER,
    flask2_id: DataTypes.INTEGER,
    flask3_id: DataTypes.INTEGER,
    flask4_id: DataTypes.INTEGER,
    skill_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Inventory',
  });
  return Inventory;
};
