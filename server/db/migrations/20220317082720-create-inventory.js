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
      weapon1_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Weapons',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      weapon2_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Weapons',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      weapon3_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Weapons',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      armor1_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Armors',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      armor2_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Armors',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      armor3_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Armors',
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
      skill1_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      skill2_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
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
