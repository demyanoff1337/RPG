'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('People', [{
        user_id: 1,
        level: 3,
        exp: 1337,
        HP: 1400,
        damage: 122,
        armor: 10,
        bleeding: 3,
        critical: 7,
        dodge: 15,
        contrattack: 6,
        money: 999,
        armor_id: 1,
        weapon_id: 1,
        skill_id: 1,
        flask1_id: 1,
        flask2_id: 2,
        flask3_id: 3,
        flask4_id: 4,
        inventory_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
     }, 
     {
      user_id: 2,
      level: 2,
      exp: 777,
      HP: 1337,
      damage: 122,
      armor: 140,
      bleeding: 2,
      critical: 2,
      dodge: 5,
      contrattack: 50,
      money: 99999,
      armor_id: 1,
      weapon_id: 1,
      skill_id: 1,
      inventory_id: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
   }], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('People', null, {});
  }
};
