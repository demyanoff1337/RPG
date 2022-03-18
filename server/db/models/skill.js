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
      this.belongsTo(models.SkillEffect, { foreignKey: 'skill_effect_id' });
      this.hasMany(models.Person, { foreignKey: 'skill_id' });
      this.hasMany(models.Inventory, { foreignKey: 'skill1_id' });
      this.hasMany(models.Inventory, { foreignKey: 'skill2_id' });
    }
  }
  Skill.init({
    skill_effect_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Skill',
  });
  return Skill;
};
