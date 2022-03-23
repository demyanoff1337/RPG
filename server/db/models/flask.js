'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Person, { foreignKey: 'flask1_id' });
      this.hasMany(models.Person, { foreignKey: 'flask2_id' });
      this.hasMany(models.Person, { foreignKey: 'flask3_id' });
      this.hasMany(models.Person, { foreignKey: 'flask4_id' });
      this.hasMany(models.Inventory, { foreignKey: 'flask1_id' });
      this.hasMany(models.Inventory, { foreignKey: 'flask2_id' });
      this.hasMany(models.Inventory, { foreignKey: 'flask3_id' });
      this.hasMany(models.Inventory, { foreignKey: 'flask4_id' });
    }
  }
  Flask.init({
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    HP: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    critical: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Flask',
  });
  return Flask;
};
