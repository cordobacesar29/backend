'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert(
      'slides',
      [
        {
          imageUrl: 'https://i.imgur.com/TI5y5bu.jpg',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in at nostrum totam doloremque minima voluptatibus ullam odit deleniti fugiat.',
          order: 1,
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: 'https://i.imgur.com/Y4jAeDH.jpg',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in at nostrum totam doloremque minima voluptatibus ullam odit deleniti fugiat.',
          order: 1,
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          imageUrl: 'https://i.imgur.com/knVhQyC.jpg',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in at nostrum totam doloremque minima voluptatibus ullam odit deleniti fugiat.',
          order: 1,
          organizationId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
