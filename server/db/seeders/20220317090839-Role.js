'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Roles', [{
       role_name: 'Hedgehog',
       createdAt: new Date(),
       updatedAt: new Date(),
    }, 
    {
      role_name: 'Beaver',
      createdAt: new Date(),
      updatedAt: new Date(),
   },
   {
    role_name: 'Admin',
    createdAt: new Date(),
    updatedAt: new Date(),
 }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
