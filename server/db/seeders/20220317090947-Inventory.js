'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Inventories', [{
        weapon1_id: 1,
        weapon2_id: 1,
        weapon3_id: 1,
        armor1_id: 1,
        armor2_id: 1,
        armor3_id: 1,
        flask1_id: 1,
        flask2_id: 1,
        skill1_id: 1,
        skill2_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Inventories', null, {});
  }
};
