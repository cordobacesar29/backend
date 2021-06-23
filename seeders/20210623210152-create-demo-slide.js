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
    
     await queryInterface.bulkInsert('slides', [{
        imageUrl: 'https://www.cleverfiles.com/howto/wp-content/uploads/2018/03/minion.jpg',
       text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium in at nostrum totam doloremque minima voluptatibus ullam odit deleniti fugiat.',
       order: 1,
       organizationId: 1
      }], {});

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
