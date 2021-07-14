'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
        name: 'organization test',
        image: 'https://images.freeimages.com/images/large-previews/23a/three-gondoliers-and-a-duck-1391336.jpg',
        phone: 111552,
        address: 'Organization seeders test',
        welcomeText: 'welcome to organization test',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'organization test 2',
        image: 'https://images.freeimages.com/images/large-previews/23a/three-gondoliers-and-a-duck-1391336.jpg',
        phone: 1115554,
        address: 'Organization seeders test 2 ',
        welcomeText: 'welcome to organization test 2',
        createdAt: new Date,
        updatedAt: new Date
      }], {});
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
