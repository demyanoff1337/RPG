'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Inventories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      weapon_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Weapons',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      armor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Armors',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      flask1_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Flasks',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      flask2_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Flasks',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      flask3_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Flasks',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      flask4_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Flasks',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Inventories');
  }
};
