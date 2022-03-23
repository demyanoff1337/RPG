'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Inventories', [{
        weapon_id: 2,
        armor_id: 2,
        flask1_id: 5,
        flask2_id: 1,
        flask4_id: 1,
        skill_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Inventories', null, {});
  }
};
