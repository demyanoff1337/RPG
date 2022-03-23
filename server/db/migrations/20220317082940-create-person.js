'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('People', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'People',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      level: {
        type: Sequelize.INTEGER
      },
      exp: {
        type: Sequelize.INTEGER
      },
      HP: {
        type: Sequelize.INTEGER
      },
      damage: {
        type: Sequelize.INTEGER
      },
      armor: {
        type: Sequelize.INTEGER
      },
      bleeding: {
        type: Sequelize.INTEGER
      },
      critical: {
        type: Sequelize.INTEGER
      },
      dodge: {
        type: Sequelize.INTEGER
      },
      contrattack: {
        type: Sequelize.INTEGER
      },
      money: {
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
      skill_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Skills',
          key: 'id',
        },
        onDelete: 'cascade',
      },
      inventory_id: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Inventories',
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
    await queryInterface.dropTable('People');
  }
};
