'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.bulkInsert('Users', [{
        role_id: 1,
        nickname: 'TopHedgehog',
        name: 'Tolyan',
        gender: 'M',
        mail: '1',
        password: '1',
        avatar: 'https://nypost.com/wp-content/uploads/sites/2/2021/05/hedgehog.jpg?quality=80&strip=all',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
      role_id: 2,
      nickname: 'TopBeaver',
      name: 'Clown',
      gender: 'M',
      mail: '2',
      password: '2',
      avatar: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/American_Beaver.jpg/597px-American_Beaver.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
  },
  {
    role_id: 2,
    nickname: 'IHATEHEDGHEHOGS',
    name: 'BEAVERiha',
    gender: 'F',
    mail: '3',
    password: '3',
    avatar: 'https://test.birdid.no/mammal/db_media/eBook/49901e0320c2950174f223b5888361d28bd4bb79.jpg',
    createdAt: new Date(),
    updatedAt: new Date(),
}, 
{
  role_id: 1,
  nickname: 'EZHHIII!!',
  name: 'volodya',
  gender: 'M',
  mail: '4',
  password: '4',
  avatar: 'https://www.meme-arsenal.com/memes/2433145282c497c718a8859894466452.jpg',
  createdAt: new Date(),
  updatedAt: new Date(),
},], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
