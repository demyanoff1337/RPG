'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Flasks', [{
        title: 'МЕД 1',
        image: 'honey-1.png',
        price: 10,
        HP: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МЕД 2',
        image: 'honey-2.png',
        price: 20,
        HP: 250,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МЕД 3',
        image: 'honey-3.png',
        price: 25,
        critical: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МЕД 4',
        image: 'honey-4.png',
        price: 35,
        armor: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МЕД 5',
        image: 'honey-5.png',
        price: 50,
        HP: 1000,
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Flasks', null, {});
  }
};
