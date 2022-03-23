'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Skill extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Person, { foreignKey: 'skill_id' });
    }
  }
  Skill.init({
    title: DataTypes.STRING,
    image: DataTypes.TEXT,
    price: DataTypes.INTEGER,
    HP: DataTypes.INTEGER,
    damage: DataTypes.INTEGER,
    armor: DataTypes.INTEGER,
    critical: DataTypes.INTEGER,

  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};
