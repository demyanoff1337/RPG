'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Skills', [{
        title: 'ОГОНЬ',
        price: 20,
        damage: 20,
        image: 'fire-1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ОГОНЬ 2',
        price: 60,
        damage: 40,
        image: 'fire-2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ОГОНЬ 3',
        price: 110,
        damage: 70,
        image: 'fire-3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ОГОНЬ 4',
        price: 200,
        damage: 120,
        image: 'fire-4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ОГОНЬ 5',
        price: 444,
        damage: 222,
        image: 'fire-5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Skills', null, {});
  }
};
