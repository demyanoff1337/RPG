'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Armors', [{
        title: 'КУСОК ДЕРЕВА',
        price: 20,
        armor: 5,
        image: 'armor-1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ДЕРЕВЯННЫЙ ЩИТ',
        price: 65,
        armor: 8,
        image: 'armor-2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ДОСПЕХИ',
        price: 145,
        armor: 12,
        image: 'armor-3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ШЛЕМ РЫЦАРЯ',
        price: 360,
        armor: 15,
        image: 'armor-4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'СТАЛЬНОЙ ЩИТ',
        price: 666,
        armor: 33,
        image: 'armor-5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Armors', null, {});
  }
};
