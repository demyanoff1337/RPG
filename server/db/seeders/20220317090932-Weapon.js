'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Weapons', [{
        title: 'ПАЛКА',
        price: 20,
        damage: 25,
        critical: 10,
        image: 'weapon-1.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'КОПЬЕ',
        price: 120,
        damage: 75,
        critical: 14,
        image: 'weapon-2.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'ТОПОР',
        price: 210,
        damage: 145,
        critical: 17,
        image: 'weapon-3.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'СЕКИРА',
        price: 350,
        damage: 230,
        critical: 20,
        image: 'weapon-4.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'МЕЧ',
        price: 777,
        damage: 444,
        critical: 33,
        image: 'weapon-5.png',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.bulkDelete('Weapons', null, {});
  }
};
