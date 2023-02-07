'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert('Users', [
      {
        username: 'minhduypham',
        email: 'hadtnt71@gmail.com',
        // password: 123456
        password:
          '$2b$10$RHXviDZAqiot72qwg12Z/ei1PTS08pR1fyNdkTET6bMFHe.eXKwYq',
        img: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'minh5',
        email: '5@gmail.com',
        password:
          '$2b$10$RHXviDZAqiot72qwg12Z/ei1PTS08pR1fyNdkTET6bMFHe.eXKwYq',
        img: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'minh3',
        email: '3@gmail.com',
        password:
          '$2b$10$RHXviDZAqiot72qwg12Z/ei1PTS08pR1fyNdkTET6bMFHe.eXKwYq',
        img: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
