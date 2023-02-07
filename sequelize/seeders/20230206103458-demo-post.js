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
     *
     */
    await queryInterface.bulkInsert('Posts', [
      {
        title: 'title 1',
        desc: 'art 1',
        img: '1675332461442cap2.jpg',
        date: new Date(),
        userid: 3,
        cat: 'art',
      },
      {
        title: 'title 2',
        desc: 'science 2',
        img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        date: new Date(),
        userid: 3,
        cat: 'science',
      },
      {
        title: 'title 3',
        desc: 'technology 3',
        img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        date: new Date(),
        userid: 3,
        cat: 'technology',
      },
      {
        title: 'title 4',
        desc: 'cinema 4',
        img: 'https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        date: new Date(),
        userid: 3,
        cat: 'cinema',
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
