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
      this.belongsTo(models.Effect, { foreignKey: 'effect_id' });
      this.hasMany(models.Person, { foreignKey: 'flask_id' });
      this.hasMany(models.Inventory, { foreignKey: 'flask1_id' });
      this.hasMany(models.Inventory, { foreignKey: 'flask2_id' });
    }
  }
  Flask.init({
    effect_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Flask',
  });
  return Flask;
};
