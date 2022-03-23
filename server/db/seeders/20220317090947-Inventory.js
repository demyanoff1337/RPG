'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Inventories', [{
        weapon_id: 1,
        armor_id: 1,
        flask1_id: 1,
        flask2_id: 1,
        flask3_id: 1,
        flask4_id: 1,
        skill_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Inventories', null, {});
  }
};
