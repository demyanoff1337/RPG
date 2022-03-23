'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Effect extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Effect.init({
    HP: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    dodge: DataTypes.INTEGER,
    critical: DataTypes.INTEGER,
    bleeding: DataTypes.INTEGER,
    contrattack: DataTypes.INTEGER,
    count: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Effect',
  });
  return Effect;
};
